import "../../global-extensions";

/** Distinct `id` should be provided for HTML (or custom) input if we want to combine it with HTML label and other browser functionalities. */
export function createInputId(dataName: string, inputType: string): string {
  const randomness = `${Math.randomInt(1000, 9999)}-${Math.randomInt(
    1000,
    9999
  )}`;
  return `@id-${randomness}-input-${inputType}-data-${dataName}`
    .replace(/\-/gm, "_")
    .replace(/(\_{2,})/gm, "_");
}
