import { randomIntFn, normalizeCountryCharsFn, longestSubstringFn, roundPreciseFn, } from "./utils/utils.index";
import { default as arrayUtilsProtected } from "./utils/for-extensions/protected/array";
import { default as promiseUtilsProtected } from "./utils/for-extensions/protected/promise";
const logs = [];
function logExtensionsAdded() {
    const emojiStyle = "background: rgba(10,0,0,0.5); font-size: 11px; padding: 6px; font-weight: 600; height: 20px;";
    const nameStyle = "color: lightgreen; background: rgba(10,0,0,0.5); font-size: 11px; padding: 6px 3.2px; font-weight: 600; height: 20px;";
    const defaultStyle = "color: rgba(200,200,230,1); background: rgba(10,0,0,0.5); font-size: 11px; padding: 6px 3.2px; height: 20px;";
    console.groupCollapsed("New functions successfully added to your project:");
    logs.forEach(({ fnName, objName }) => console.log(`%c🎉%c${fnName}%cwas set as new property to%c${objName}%c🎉`, emojiStyle, nameStyle, defaultStyle, nameStyle, emojiStyle));
    console.groupEnd();
}
/** Math */
if (!Math.randomInt) {
    Math.randomInt = randomIntFn;
    logs.push({ objName: "Math", fnName: "randomInt" });
}
if (!Math.roundPrecise) {
    Math.roundPrecise = roundPreciseFn;
    logs.push({ objName: "Math", fnName: "roundPrecise" });
}
/** String */
if (!String.prototype.hasOwnProperty("normalizeCountryChars")) {
    logs.push({ objName: "String", fnName: "normalizeCountryChars" });
    String.prototype.normalizeCountryChars = function (countryCode) {
        return normalizeCountryCharsFn(this.toString(), countryCode);
    };
}
if (!String.prototype.hasOwnProperty("longestSubstring")) {
    logs.push({ objName: "String", fnName: "longestSubstring" });
    String.prototype.longestSubstring = async function () {
        return longestSubstringFn(this.toString());
    };
}
/** Array */
if (!Array.prototype.hasOwnProperty("sortNumbers")) {
    logs.push({ objName: "Array", fnName: "sortNumbers" });
    Array.prototype.sortNumbers = function () {
        return arrayUtilsProtected.sortNumbersFn(this);
    };
}
if (!Array.prototype.hasOwnProperty("random")) {
    logs.push({ objName: "Array", fnName: "random" });
    Array.prototype.random = function (amount) {
        return arrayUtilsProtected.randomFn(this, amount);
    };
}
if (!Array.prototype.hasOwnProperty("popRandom")) {
    logs.push({ objName: "Array", fnName: "popRandom" });
    Array.prototype.popRandom = function () {
        return arrayUtilsProtected.popRandomFn(this);
    };
}
if (!Array.prototype.hasOwnProperty("symmetricDifference")) {
    logs.push({ objName: "Array", fnName: "symmetricDifference" });
    Array.prototype.symmetricDifference = function (comparedArray, compareObjectsWithoutIdKey, objectIdKey) {
        return arrayUtilsProtected.symmetricDifferenceFn(this, comparedArray, compareObjectsWithoutIdKey, objectIdKey);
    };
}
/** Promise */
if (!Promise.prototype.hasOwnProperty("fireAndForget")) {
    logs.push({ objName: "Promise", fnName: "fireAndForget" });
    Promise.prototype.fireAndForget = function (printError = false) {
        promiseUtilsProtected.fireAndForgetFn(this, printError);
    };
}
logExtensionsAdded();
//# sourceMappingURL=global-extensions.js.map