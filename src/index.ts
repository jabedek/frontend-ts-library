import "./global-extensions";
import * as reset from "./reset";

export default reset;

import {
  randomIntFn,
  normalizeCountryCharsFn,
  longestSubstringFn,
  convertTime,
  createInputId,
  startListening,
  stopListening,
  loop,
  generateDocumentId,
} from "./utils/utils.index";

import { CallbackFn, TimeUnit } from "./models";
export {
  randomIntFn,
  normalizeCountryCharsFn,
  longestSubstringFn,
  convertTime,
  generateDocumentId,
  createInputId,
  startListening,
  stopListening,
  loop,
};

export { CallbackFn, TimeUnit };

function extract() {
  import("./global-extensions");
  import("./reset");
}

extract();
