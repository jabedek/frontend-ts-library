import "./global-extensions";

import {
  randomIntFn,
  normalizeCountryCharsFn,
  longestSubstringFn,
  convertTime,
  createInputId,
  startSniffing,
  stopSniffing,
} from "./utils/utils.index";

import { Primitive, CallbackFn, TimeUnit } from "./models";

export {
  randomIntFn,
  normalizeCountryCharsFn,
  longestSubstringFn,
  convertTime,
  createInputId,
  startSniffing,
  stopSniffing,
};

export { Primitive, CallbackFn, TimeUnit };

function extract() {
  import("./global-extensions");
}

extract();
