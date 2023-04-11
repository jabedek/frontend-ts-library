const [date, time] = new Date().toISOString().split("T");
let logsOn = true;
let clockID = undefined;
const record = {
    title: `record on ${date} ${time.split(".")[0]}`,
    size: 0,
};
const startTime = new Date();
startTime.setHours(0, 0, 0, 0);
const endTime = new Date();
endTime.setHours(23, 59, 59, 999);
const originalFetch = window.fetch;
function randomInt(minIncl = 10000, maxIncl = 80000) {
    if (minIncl === maxIncl) {
        return minIncl;
    }
    if (minIncl > maxIncl) {
        const tempMin = minIncl;
        minIncl = maxIncl;
        maxIncl = tempMin;
    }
    maxIncl = Math.floor(maxIncl);
    minIncl = Number(Number(minIncl).toFixed(0));
    return Math.floor(Math.random() * (maxIncl - minIncl) + (minIncl + 1));
}
function shouldInterceptRequest(url, startTime, endTime) {
    const currentTime = new Date();
    const timeGuard = (!startTime && !endTime) ||
        (!startTime && endTime && currentTime <= endTime) ||
        (startTime && !endTime && currentTime <= startTime) ||
        (startTime &&
            endTime &&
            currentTime <= startTime &&
            currentTime <= endTime);
    return timeGuard;
}
function generateRecordKey(url, recordSize) {
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
async function saveRecordToFile(record) {
    const file = await new Promise((res, rej) => {
        const json = JSON.stringify(record, null, 2);
        const blob = new Blob([json], { type: "text/plain" });
        res(blob);
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = record.title;
    link.click();
}
function stopListening() {
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
async function saveRequestData(response, requestOptions) {
    const { url } = response;
    const requestBody = (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.body) || undefined;
    const recordKey = generateRecordKey(url, record.size);
    const responseHeaders = {};
    let requestHeaders = {};
    if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers) {
        requestHeaders = JSON.parse(JSON.stringify(requestOptions.headers));
    }
    for (const [key, value] of response.headers.entries()) {
        responseHeaders[key] = value;
    }
    const requestData = {
        responseHeaders,
        requestHeaders,
        payload: requestBody ? JSON.parse(requestBody) : undefined,
        method: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.method) || undefined,
        url,
        response: undefined,
    };
    response
        .clone()
        .text()
        .then((data) => {
        requestData.response = data ? JSON.parse(data) : undefined;
        record[recordKey] = requestData;
        record.size++;
        if (logsOn) {
            console.log("Added:\n", recordKey, requestData);
        }
    }, (err) => {
        console.error("Below error relates to intercepting and mocking requests. Everything works fine otherwise.");
        console.error(err);
        console.error(requestData);
    });
}
/**
 * Starts listening for network requests on current browser tab.
 *
 * @param {boolean} enableLogs - Indicates whether to enable logging.
 * @param {Date | undefined} startTime - Filters requests by start time if specified.
 * @param {Date | undefined} endTime - Filters requests by end time if specified.
 */
function startListening(enableLogs = true, startTime, endTime) {
    logsOn = enableLogs;
    if (logsOn) {
        console.log("Listening...");
    }
    const interceptor = window.fetch;
    window.fetch = function (request, requestOptions) {
        const result = interceptor.apply(this, [request, requestOptions]);
        result.then((response) => {
            if (shouldInterceptRequest(response.url, startTime, endTime)) {
                saveRequestData(response, requestOptions);
            }
        }, (err) => {
            console.error(err);
        });
        return result;
    };
    clockID = setTimeout(stopListening, (endTime || new Date(23, 59, 59, 999)).getTime() - Date.now());
}
// startListening(true, startTime, endTime);
export { startListening as startSniffing, stopListening as stopSniffing };
//# sourceMappingURL=http-sniffer.js.map