/**
Replaces Polish letters with their Latin equivalents.
@param text - The text to be normalized.
@returns The normalized string.
*/
const normalizePolish = (text = "") => {
    const normalizedText = text === null || text === void 0 ? void 0 : text.replace("Ą", "A").replace("Ć", "C").replace("Ę", "E").replace("Ł", "L").replace("Ń", "N").replace("Ó", "O").replace("Ś", "S").replace("Ź", "Z").replace("Ż", "Z").replace("ą", "a").replace("ć", "c").replace("ę", "e").replace("ł", "l").replace("ń", "n").replace("ó", "o").replace("ś", "s").replace("ź", "z").replace("ż", "z");
    return normalizedText;
};
/**
Replaces German letters with their Latin equivalents.
@param text - The text to be normalized.
@returns The normalized string.
*/
const normalizeGerman = (text = "") => {
    const normalizedText = text === null || text === void 0 ? void 0 : text.replace("Ä", "A").replace("Ö", "O").replace("Ü", "U").replace("ẞ", "SS").replace("ä", "a").replace("ö", "o").replace("ü", "u").replace("ß", "ss");
    return normalizedText;
};
export function normalizeCountryCharsFn(text, countryCode, keepCapitals = false) {
    let transformedText = text;
    if (!keepCapitals) {
        transformedText = transformedText.toLocaleLowerCase(countryCode);
    }
    switch (countryCode) {
        case "PL":
            transformedText = normalizePolish(text);
        case "DE":
            transformedText = normalizeGerman(text);
        default:
            transformedText = text;
    }
    return transformedText;
}
export async function longestSubstringFn(s) {
    return new Promise((resolve) => {
        const scanner = [];
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
//# sourceMappingURL=string.js.map