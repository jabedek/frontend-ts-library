# ✨Frontend TS Library - Frotsi ✨

## _Extra Sh!t for Frontend Development!_

Frotsi provides basic extensions for Math, Promise, String, Array globals objects. Also it adds some additional utils related to other areas. All these functions will amp your work on building components/views/custom-html-elements etc.

## Features

- Extending **JS.Math** with functions: **randomInt, roundPrecise**
- Extending **JS.String** with functions: **normalizeCountryChars, longestSubstring**
- Extending **JS.Array** with functions: **sortNumbers, random, popRandom, differenceDistinctBetween**
- Extending **JS.Promise** with functions: **fireAndForget**
- Providing functions related to time: **convertTime**
- Providing functions related to HTML: **createInputId**
- Providing functions related to HTTP: **startListening** (http sniffing)

## Installation

After installing it with `npm` you should import the library at the top of your project's main (root) JS/TS file, so the global object extensions can attach themselfes.
For example in Angular it would be **main.ts**:

```sh
import 'frotsi';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
...
```

## Usage

After installing and importing, use it anywhere in your app, like so:

```sh
Math.randomInt(1, 2)
Math.roundPrecise('up', 54.125, 2)
Math.roundPrecise('down', 54.125, 2)
convertTime('fromMS', 3000, 'seconds')
convertTime('toMS', 3, 'seconds')
'Żółć'.normalizeCountryChars('PL')
await 'asdasdbjasdhjbehbdasdj wefiuhjabeasdaasdbeasdabevasdasdbjasdhjbehbdasdj wefiuhjabeasdaasdbeasdabev'.longestSubstring()
[13,67,4,24,566].sortNumbers()
[1, 2, 3].random()
[1, 2, 3].random(2)
[1, 2, 3].popRandom()
[1, 2, 3].differenceDistinctBetween([1, 2, 3, 3, 4])
createInputId('select')
new Promise(() => {}).fireAndForget()
```
