import { randomIntFn } from "./utils/utils.index";
import { default as arrayUtilsProtected } from "./utils/for-extensions/protected/array";
import { default as promiseUtilsProtected } from "./utils/for-extensions/protected/promise";
const logs = [];
function logExtensionsAdded() {
    const emojiStyle = "background: rgba(10,0,0,0.5); font-size: 12px; text-shadow:1px 1px 2px rgba(255,255,0,0.75); padding: 6px; font-weight: 600; height: 20px;";
    const nameStyle = "color: lightgreen; background: rgba(10,0,0,0.5); font-size: 12px; text-shadow:1px 1px 2px rgba(255,255,0,0.75); padding: 6px 1px; font-weight: 600; height: 20px;";
    const nameStyle2 = "color: lightsalmon; background: rgba(10,0,0,0.5); font-size: 12px; text-shadow:1px 1px 2px rgba(255,255,0,0.75); padding: 6px 1px; font-weight: 600; height: 20px;";
    const defaultStyle = "color: rgba(200,200,230,1); background: rgba(10,0,0,0.5); font-size: 12px; text-shadow:1px 1px 2px rgba(255,255,0,0.75); padding: 6px; height: 20px;";
    console.groupCollapsed("New functions successfully added to your project:");
    logs.forEach(({ fnName, objName }) => console.log(`%c🎉%cAdded %c${objName}%c[${fnName}] `, emojiStyle, defaultStyle, nameStyle2, nameStyle));
    console.log(`%cThat's only those added to global objects. Check out what else is new at: https://www.npmjs.com/package/frotsi`, defaultStyle);
    console.groupEnd();
}
/** Math */
if (!Math.randomInt) {
    Math.randomInt = randomIntFn;
    logs.push({ objName: "Math", fnName: "randomInt" });
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