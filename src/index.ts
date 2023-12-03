import "./global-extensions";

import {
  randomIntFn,
  generateInputId,
  generateDocumentId,
  loop,
  LocalStorage,
} from "./utils/utils.index";
import { CallbackFn, Flatten } from "./types";
import { ArrayElement, SymmetricalDifferences } from "./models";
export { randomIntFn, generateDocumentId, generateInputId, loop, LocalStorage };

export { CallbackFn, Flatten, ArrayElement, SymmetricalDifferences };

function extract() {
  import("./global-extensions");
}

extract();
