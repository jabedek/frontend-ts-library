var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
Replaces Polish characters with their Latin equivalents.
@param text - The text to be normalized.
@returns The normalized string.
*/
const normalizePolish = (text = "") => {
    const normalizedText = text === null || text === void 0 ? void 0 : text.replace("ą", "a").replace("ć", "c").replace("ę", "e").replace("ł", "l").replace("ń", "n").replace("ó", "o").replace("ś", "s").replace("ź", "z").replace("ż", "z");
    return normalizedText;
};
/**
Replaces German characters with their Latin equivalents.
@param text - The text to be normalized.
@returns The normalized string.
*/
const normalizeGerman = (text = "") => {
    const normalizedText = text === null || text === void 0 ? void 0 : text.replace("ä", "a").replace("ö", "o").replace("ü", "u").replace("ß", "ss");
    return normalizedText;
};
export function normalizeCountryCharsFn(text, countryCode) {
    switch (countryCode) {
        case "PL":
            return normalizePolish(text);
        case "DE":
            return normalizeGerman(text);
        default:
            return text;
    }
}
export function longestSubstringFn(s) {
    return __awaiter(this, void 0, void 0, function* () {
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
    });
}
//# sourceMappingURL=string.js.map