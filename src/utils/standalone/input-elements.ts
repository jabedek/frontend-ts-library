import "../../global-extensions";

/** Distinct `id` should be provided for HTML (or custom) input if we want to combine it with HTML label and other browser functionalities. */
export function createInputId(inputType: string): string {
  return `input-${inputType}-${Math.randomInt(1000, 9000)}-${Math.randomInt(
    1000,
    9000
  )}`
    .replace(/\-/gm, "_")
    .replace(/(\_{2,})/gm, "_");
}
