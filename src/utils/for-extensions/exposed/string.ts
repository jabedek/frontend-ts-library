import { CountryCode } from "../../../models";

/**
Replaces Polish characters with their Latin equivalents.
@param text - The text to be normalized.
@returns The normalized string.
*/
const normalizePolish = (text = ""): string => {
  const normalizedText = text
    ?.replace("ą", "a")
    .replace("ć", "c")
    .replace("ę", "e")
    .replace("ł", "l")
    .replace("ń", "n")
    .replace("ó", "o")
    .replace("ś", "s")
    .replace("ź", "z")
    .replace("ż", "z");

  return normalizedText;
};

/**
Replaces German characters with their Latin equivalents.
@param text - The text to be normalized.
@returns The normalized string.
*/
const normalizeGerman = (text = ""): string => {
  const normalizedText = text
    ?.replace("ä", "a")
    .replace("ö", "o")
    .replace("ü", "u")
    .replace("ß", "ss");

  return normalizedText;
};

export function normalizeCountryCharsFn(
  text: string,
  countryCode: CountryCode
) {
  switch (countryCode) {
    case "PL":
      return normalizePolish(text);
    case "DE":
      return normalizeGerman(text);
    default:
      return text;
  }
}

export async function longestSubstringFn(s: string): Promise<string> {
  return new Promise((resolve) => {
    const scanner: string[] = [];
    let longest = 0;

    for (let char of s) {
      const possibleIndex = scanner.indexOf(char);

      if (possibleIndex !== -1) {
        scanner.splice(0, possibleIndex + 1);
      }
      scanner.push(char);
      longest = Math.max(longest, scanner.length);
    }

    resolve(scanner.join(""));
  });
}
