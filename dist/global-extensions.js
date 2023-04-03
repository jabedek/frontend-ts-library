var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { randomIntFn, nearestFloorFn, nearestCeilFn, normalizeCountryCharsFn, longestSubstringFn, } from "./utils/utils.index";
import { default as arrayUtilsProtected } from "./utils/for-extensions/protected/array";
import { default as promiseUtilsProtected } from "./utils/for-extensions/protected/promise";
/** Math */
if (!Math.randomInt) {
    Math.randomInt = randomIntFn;
}
if (!Math.nearestFloor) {
    Math.nearestFloor = nearestFloorFn;
}
if (!Math.nearestCeil) {
    Math.nearestCeil = nearestCeilFn;
}
/** String */
if (!String.prototype.hasOwnProperty("normalizeCountryChars")) {
    String.prototype.normalizeCountryChars = function (countryCode) {
        return normalizeCountryCharsFn(this.toString(), countryCode);
    };
}
if (!String.prototype.hasOwnProperty("longestSubstring")) {
    String.prototype.longestSubstring = function () {
        return __awaiter(this, void 0, void 0, function* () {
            return longestSubstringFn(this.toString());
        });
    };
}
/** Array */
if (!Array.prototype.hasOwnProperty("sortNumbers")) {
    Array.prototype.sortNumbers = function () {
        return arrayUtilsProtected.sortNumbersFn(this);
    };
}
if (!Array.prototype.hasOwnProperty("random")) {
    Array.prototype.random = function () {
        return arrayUtilsProtected.randomFn(this);
    };
}
if (!Array.prototype.hasOwnProperty("differenceDistinctBetween")) {
    Array.prototype.differenceDistinctBetween = function (compared, compareObjectsWithoutIdKey, objectIdKey) {
        return arrayUtilsProtected.differenceDistinctBetweenFn(this, compared, compareObjectsWithoutIdKey, objectIdKey);
    };
}
/** Promise */
if (!Promise.prototype.hasOwnProperty("fireAndForget")) {
    Promise.prototype.fireAndForget = function (printError = false) {
        promiseUtilsProtected.fireAndForgetFn(this, printError);
    };
}
//# sourceMappingURL=global-extensions.js.map