import "../../global-extensions";

/** Produces ID for HTML input and label based on provided `dataName` and `inputType` and some randomness.
 * @Example `@id_4796_5196_input_select_data_project-role`
 */
export function generateInputId(dataName: string, inputType: string): string {
  const randomness = `${Math.randomInt(1000, 9999)}-${Math.randomInt(
    1000,
    9999
  )}`;
  return `@id-${randomness}-input-${inputType}-data-${dataName}`
    .replace(/\-/gm, "_")
    .replace(/(\_{2,})/gm, "_");
}

/** Produces ID based on current time and some randomness.
 * @Example `20230425_022358_ABC`
 * @Example `20230425_022358_PQK_suffix`
 */
export function generateDocumentId(suffix = "") {
  const regexDateTimeSeparators = new RegExp(/\-|\:/gm);
  const regexIsoStringSeparators = new RegExp(/T|\./gm);

  const [isoDate, isoTime, utcOffset] = new Date()
    .toISOString()
    .replace(regexDateTimeSeparators, "")
    .split(regexIsoStringSeparators);

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const randomLetters = Array.from(
    { length: 3 },
    () => letters[Math.randomInt(0, 25)]
  )
    .join("")
    .toUpperCase();

  const sanitizedDate = `${isoDate}_${isoTime}_${randomLetters}${
    suffix ? "_" + suffix : ""
  }`;
  return sanitizedDate;
}
