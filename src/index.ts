import "./global-extensions";

import {
  randomIntFn,
  normalizeCountryCharsFn,
  longestSubstringFn,
  convertTime,
  generateInputId,
  generateDocumentId,
  startListening,
  stopListening,
  loop,
} from "./utils/utils.index";

import { CallbackFn, TimeUnit } from "./models";
export {
  randomIntFn,
  normalizeCountryCharsFn,
  longestSubstringFn,
  convertTime,
  generateDocumentId,
  generateInputId,
  startListening,
  stopListening,
  loop,
};

export { CallbackFn, TimeUnit };

function extract() {
  import("./global-extensions");
}

extract();
