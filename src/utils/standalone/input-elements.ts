import "../../global-extensions";

type InputDateTime = "date" | "month" | "time" | "week";
type InputChoice = "checkbox" | "radio" | "select";
type InputWrite =
  | "text"
  | "email"
  | "password"
  | "number"
  | "search"
  | "url"
  | "tel"
  | "textarea";

type InputType = InputDateTime | InputChoice | InputWrite;

/** Distinct `id` should be provided for HTML (or custom) input if we want to combine it with HTML label and other browser functionalities. */
export function createInputId(dataName: string, inputType: InputType): string {
  const randomness = `${Math.randomInt(1000,9999)}-${Math.randomInt(1000,9999)}`;
  return `@id-${dataName}-input-${inputType}-${randomness}`
    .replace(/\-/gm, "_")
    .replace(/(\_{2,})/gm, "_");
}
