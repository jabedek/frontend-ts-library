# ✨Frontend TS Library - Frotsi ✨

## _Extra Stuff for Frontend Development!_

Frotsi provides basic extensions for Math, Promise, String, Array globals objects. Besides that it adds some additional utils for various areas. All these functions will amp your work on building components/views/custom-html-elements etc.

## Features

### Functions

- Extending **JS.Math** with functions: **randomInt, roundPrecise**
- Extending **JS.String** with functions: **normalizeCountryChars, longestSubstring**
- Extending **JS.Array** with functions: **sortNumbers, random, popRandom, symmetricDifference**
- Extending **JS.Promise** with functions: **fireAndForget**
- Providing functions related to time: **convertTime**
- Providing functions related to HTML: **generateInputId**
- Providing functions related to HTTP: **startListening** (listening at current page)
- **loop** iterator so you don't have to iterate over spread unfilled Arrays anymore

### Types

- **Flatten** - Takes a type T and tries to flatten its type hierarchy by combining all of its properties into a single, non-nested type. _Borrowed from TypeScript Grand Wizard **Matt Pocock** (he calls it Prettify, see here: https://www.youtube.com/watch?v=2lCCKiWGlC0)._

## Installation

After installing it with `npm` you should import the library at the top of your project's main (root) JS/TS file, so the global object extensions can attach themselfes.
For example in Angular it would be **main.ts**, in React **.main.tsx**:

```sh
import 'frotsi';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
...
```

### **_`Note for React users:`_**

Thanks to **React.StrictNode** set in `main.tsx` some of this library's functions, when used with `console.log`, will cause **_double-logging_**.
If you are using **React.StrictNode**, you will see that every output logged into browser console is doubled.
Example:

```sh
looping 12... [App / ComponentABC].tsx
looping 12... VM installHook.js:[line_number]
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
[1, 2, 3].symmetricDifference([1, 2, 3, 3, 4])
generateInputId('select')
new Promise(() => {}).fireAndForget()
loop(5).forEach(index=> ... )
```
