import "../../global-extensions";
/** Produces ID for HTML input and label based on provided `dataName` and `inputType` and some randomness.
 * @Example `@id_4796_5196_input_text_data_project_title`
 */
export function generateInputId(dataName, inputType) {
    const randomness = `${Math.randomInt(1000, 9999)}-${Math.randomInt(1000, 9999)}`;
    return `@id-${randomness}-input-${inputType}-data-${dataName}`
        .replace(/\-/gm, "_")
        .replace(/(\_{2,})/gm, "_");
}
/** Produces ID based on current time and some randomness.
 * @Example `20230425_022358_902Z_420`
 */
export function generateDocumentId() {
    const regexDateTimeSeparators = new RegExp(/\-|\:/gm);
    const regexIsoStringSeparators = new RegExp(/T|\./gm);
    const [isoDate, isoTime, utcOffset] = new Date()
        .toISOString()
        .replace(regexDateTimeSeparators, "")
        .split(regexIsoStringSeparators);
    const sanitizedDate = `${isoDate}_${isoTime}_${utcOffset}_${Math.randomInt(100, 999)}`;
    return sanitizedDate;
}
//# sourceMappingURL=id-generators.js.map