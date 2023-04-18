export function generateDocumentId() {
  const regexDateTimeSeparators = new RegExp(/\-|\:/gm);
  const regexIsoStringSeparators = new RegExp(/T|\./gm);

  const [isoDate, isoTime, utcOffset] = new Date()
    .toISOString()
    .replace(regexDateTimeSeparators, "")
    .split(regexIsoStringSeparators);

  const sanitizedDate = `${isoDate}_${isoTime}_${Math.randomInt(1000, 9999)}`;
  return sanitizedDate;
}
