const [date, time] = new Date().toISOString().split("T");
let logsOn = true;
let clockID: number | undefined = undefined;
const record: Record<string, any> = {
  title: `record on ${date} ${time.split(".")[0]}`,
  size: 0,
};
const startTime: Date = new Date();
startTime.setHours(0, 0, 0, 0);
const endTime: Date = new Date();
endTime.setHours(23, 59, 59, 999);
const originalFetch = window.fetch;

function randomInt(minIncl: number = 10000, maxIncl: number = 80000): number {
  if (minIncl === maxIncl) {
    return minIncl;
  }
  if (minIncl > maxIncl) {
    const tempMin = minIncl;
    minIncl = maxIncl;
    maxIncl = tempMin;
  }
  minIncl = Math.ceil(minIncl) - 1;
  maxIncl = Math.floor(maxIncl);
  return Math.floor(Math.random() * (maxIncl - minIncl) + (minIncl + 1));
}

function shouldInterceptRequest(url: string, startTime?: Date, endTime?: Date) {
  const currentTime = new Date();
  const timeGuard =
    (!startTime && !endTime) ||
    (!startTime && endTime && currentTime <= endTime) ||
    (startTime && !endTime && currentTime <= startTime) ||
    (startTime &&
      endTime &&
      currentTime <= startTime &&
      currentTime <= endTime);

  return timeGuard;
}

function generateRecordKey(url: string, recordSize: number): string {
  const regexHttp = new RegExp(/^([[:print:]]*)?(http(s?)\:\/\/)/);
  const regexDateTimeSeparators = new RegExp(/\-|\:/gm);
  const regexIsoStringSeparators = new RegExp(/T|\./gm);

  const [isoDate, isoTime, utcOffset] = new Date()
    .toISOString()
    .replace(regexDateTimeSeparators, "")
    .split(regexIsoStringSeparators);

  const sanitizedDate = `${isoDate}_${isoTime}`;
  const sanitizedUrl = url.replace(regexHttp, "").substring(0, 30) + "...";
  const index = `${recordSize + 1}`.padStart(4, "0");
  const random = `${index}_${randomInt(10, 99)}${randomInt(10, 99)}`;

  const recordKey = `[${sanitizedDate}][${random}][${sanitizedUrl}]`;
  return recordKey;
}

async function saveRecordToFile(record: Record<string, any>): Promise<void> {
  const file: Blob = await new Promise((res, rej) => {
    const json = JSON.stringify(record, null, 2);
    const blob = new Blob([json], { type: "text/plain" });
    res(blob);
  });

  const link = document.createElement("a") as HTMLAnchorElement;
  link.href = URL.createObjectURL(file);
  link.download = record.title;
  link.click();
}

function stopListening(): void {
  if (logsOn) {
    console.log("Listening stopped.");
    console.log(record);
  }

  clearTimeout(clockID);
  window.fetch = originalFetch;
  saveRecordToFile(record);
}

/**
 * Saves intercepted request data to a record.
 *
 * @async
 * @param {Response} response - The intercepted response object.
 * @param {RequestInit | undefined} requestOptions - The original request options.
 * @returns {Promise<void>}
 */
async function saveRequestData(
  response: Response,
  requestOptions: RequestInit | undefined
): Promise<void> {
  const { url } = response;
  const requestBody = requestOptions?.body || undefined;
  const recordKey = generateRecordKey(url, record.size);
  const responseHeaders: Record<string, any> = {};
  let requestHeaders: Record<string, string> = {};

  if (requestOptions?.headers) {
    requestHeaders = JSON.parse(JSON.stringify(requestOptions.headers));
  }

  for (const [key, value] of response.headers.entries()) {
    responseHeaders[key] = value;
  }

  const requestData = {
    responseHeaders,
    requestHeaders,
    payload: requestBody ? JSON.parse(requestBody as string) : undefined,
    method: requestOptions?.method || undefined,
    url,
    response: undefined,
  };

  response
    .clone()
    .text()
    .then(
      (data) => {
        requestData.response = data ? JSON.parse(data) : undefined;
        record[recordKey] = requestData;
        record.size++;

        if (logsOn) {
          console.log("Added:\n", recordKey, requestData);
        }
      },
      (err) => {
        console.error(
          "Below error relates to intercepting and mocking requests. Everything works fine otherwise."
        );
        console.error(err);
        console.error(requestData);
      }
    );
}

/**
 * Starts listening for network requests.
 *
 * @param {boolean} enableLogs - Indicates whether to enable logging.
 * @param {Date | undefined} startTime - Filters requests by start time if specified.
 * @param {Date | undefined} endTime - Filters requests by end time if specified.
 */
function startListening(enableLogs = true, startTime?: Date, endTime?: Date) {
  logsOn = enableLogs;

  if (logsOn) {
    console.log("Listening...");
  }

  const interceptor = window.fetch;

  window.fetch = function (
    request: Request | string | URL,
    requestOptions: RequestInit | undefined
  ) {
    const result = interceptor.apply(this, [request, requestOptions]);

    result.then(
      (response) => {
        if (shouldInterceptRequest(response.url, startTime, endTime)) {
          saveRequestData(response, requestOptions);
        }
      },
      (err) => {
        console.error(err);
      }
    );

    return result;
  };

  clockID = setTimeout(
    stopListening,
    (endTime || new Date(23, 59, 59, 999)).getTime() - Date.now()
  ) as unknown as number;
}

// startListening(true, startTime, endTime);

export { startListening as startSniffing, stopListening as stopSniffing };
