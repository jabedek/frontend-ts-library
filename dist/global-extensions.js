import { randomIntFn, normalizeCountryCharsFn, longestSubstringFn, roundPreciseFn, } from "./utils/utils.index";
import { default as arrayUtilsProtected } from "./utils/for-extensions/protected/array";
import { default as promiseUtilsProtected } from "./utils/for-extensions/protected/promise";
import * as reset from "./reset";
function logExtensionAdded(objName, fnName) {
    const emojiStyle = "background: rgba(10,0,0,0.5); font-size: 13px; padding: 6px; font-weight: 600; height: 24px;";
    const nameStyle = "color: lightgreen; background: rgba(10,0,0,0.5); font-size: 13px; padding: 6px 3.2px; font-weight: 600; height: 24px;";
    const defaultStyle = "color: rgba(200,200,230,1); background: rgba(10,0,0,0.5); font-size: 13px; padding: 6px 3.2px; height: 24px;";
    console.log(`%c🎉%c${fnName}%cwas successfully set as new property to%c${objName}%c🎉`, emojiStyle, nameStyle, defaultStyle, nameStyle, emojiStyle);
}
/** Math */
if (!Math.randomInt) {
    Math.randomInt = randomIntFn;
    logExtensionAdded("Math", "randomInt");
}
if (!Math.roundPrecise) {
    Math.roundPrecise = roundPreciseFn;
    logExtensionAdded("Math", "roundPrecise");
}
/** String */
if (!String.prototype.hasOwnProperty("normalizeCountryChars")) {
    logExtensionAdded("String", "normalizeCountryChars");
    String.prototype.normalizeCountryChars = function (countryCode) {
        return normalizeCountryCharsFn(this.toString(), countryCode);
    };
}
if (!String.prototype.hasOwnProperty("longestSubstring")) {
    logExtensionAdded("String", "longestSubstring");
    String.prototype.longestSubstring = async function () {
        return longestSubstringFn(this.toString());
    };
}
/** Array */
if (!Array.prototype.hasOwnProperty("sortNumbers")) {
    logExtensionAdded("Array", "sortNumbers");
    Array.prototype.sortNumbers = function () {
        return arrayUtilsProtected.sortNumbersFn(this);
    };
}
if (!Array.prototype.hasOwnProperty("random")) {
    logExtensionAdded("Array", "random");
    Array.prototype.random = function (amount) {
        return arrayUtilsProtected.randomFn(this, amount);
    };
}
if (!Array.prototype.hasOwnProperty("popRandom")) {
    logExtensionAdded("Array", "popRandom");
    Array.prototype.popRandom = function () {
        return arrayUtilsProtected.popRandomFn(this);
    };
}
if (!Array.prototype.hasOwnProperty("symmetricDifference")) {
    logExtensionAdded("Array", "symmetricDifference");
    Array.prototype.symmetricDifference = function (comparedArray, compareObjectsWithoutIdKey, objectIdKey) {
        return arrayUtilsProtected.symmetricDifferenceFn(this, comparedArray, compareObjectsWithoutIdKey, objectIdKey);
    };
}
/** Promise */
if (!Promise.prototype.hasOwnProperty("fireAndForget")) {
    logExtensionAdded("Promise", "fireAndForget");
    Promise.prototype.fireAndForget = function (printError = false) {
        promiseUtilsProtected.fireAndForgetFn(this, printError);
    };
}
export default reset;
//# sourceMappingURL=global-extensions.js.map