# ✨FROTSI - Frontend TS Library ✨

## _Extra Stuff for Frontend Development!_

This package should not be taken very seriously BUT it does provide many useful features.

Frotsi provides basic extensions for Math, Promise, String, Array globals objects. Besides that it adds some additional utils for various areas. All these functions will amp your work on building components/views/custom-html-elements etc.

## Features

### Functions

- Extending **JS.Math** with functions: **randomInt**
- Extending **JS.String** with functions: **normalizeCountryChars, longestSubstring**
- Extending **JS.Array** with functions: **sortNumbers, random, popRandom, symmetricDifference**
- Extending **JS.Promise** with functions: **fireAndForget**
- Providing functions related to time: **convertTime**
- Providing functions related to generating randomness: **generateInputId** (useful for html inputs), **generateDocumentId**
- Providing functions related to HTTP: **startListening** (listening at current page)
- **loop** iterator so you don't have to iterate over spreaded & unfilled Arrays anymore

### Types

- **Flatten** - Takes a type T and tries to flatten its type hierarchy by combining all of its properties into a single, non-nested type. _Borrowed from TypeScript Grand Wizard **Matt Pocock** (he calls it Prettify, see here: https://www.youtube.com/watch?v=2lCCKiWGlC0 )_.
- **DeepFlatten** - Does what `Flatten` sometimes can't in more complicated and nested object types.
- **CallbackFn** - Represents a callback function provided as argument to another one. Takes 1 type parameter - `R` - for return type.

## Installation

After installing it with `npm` you should import the library at the top of your project's main (root) JS/TS file, so the global object extensions can attach themselves.
For example in Angular it would be **main.ts**, in React **main.tsx**:

```sh
import 'frotsi';
import ...
...
```

## Usage

After installing and importing, use it anywhere in your app, like so:

```sh
Math.randomInt(1, 2)
convertTime('fromMS', 3000, 'seconds') // --> '3'
convertTime('toMS', 1, 'hours') // --> '3600000'
'Żółć'.normalizeCountryChars('PL') // --> 'zolc'
await 'asdasdbjasdhjbehbdasdj wefiuhjabeasdaasdbeasdabevasdasdbjasdhjbehbdasdj wefiuhjabeasdaasdbeasdabev'.longestSubstring()
[13,67,4,24,566].sortNumbers()
[1, 2, 3].random()
[1, 2, 3].random(2)
[1, 2, 3].popRandom()
[1, 2, 3].symmetricDifference([1, 2, 3, 3, 4])
generateInputId('select', 'project-role') // --> '@id_4796_5196_input_select_data_project-role'
generateDocumentId() // --> '20230525_022358_902Z_420'
Promise( ... ).fireAndForget()
loop(5).forEach(index => { ... })
loop(5).map(index => { return { index } })
```
