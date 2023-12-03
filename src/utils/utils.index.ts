import { randomIntFn } from "./for-extensions/exposed/math";
import { default as LocalStorage } from "./standalone/local-storage";

import {
  generateInputId,
  generateDocumentId,
} from "./standalone/id-generators";
import { loop } from "./standalone/loop-iterator";
export { randomIntFn, generateDocumentId, generateInputId, loop, LocalStorage };
