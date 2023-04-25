import "../../global-extensions";
/** Produces ID for HTML input and label based on provided `dataName` and `inputType` and some randomness.
 * @Example `@id_4796_5196_input_text_data_project_title`
 */
export declare function generateInputId(dataName: string, inputType: string): string;
/** Produces ID based on current time and some randomness.
 * @Example `20230425_022358_902Z_420`
 */
export declare function generateDocumentId(): string;
