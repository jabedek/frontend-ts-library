# ✨FROTSI - Frontend TS Library ✨

## _Extra Stuff for Frontend Development!_

This package should not be taken very seriously BUT it does provide many useful features.

Frotsi provides basic extensions for Math, Promise, String, Array globals objects. Besides that it adds some additional utils for various areas. All these functions will amp your work on building components/views/custom-html-elements etc.

## Features

### Functions

- Extending **JS.Math** with functions: **randomInt**
- Extending **JS.Array** with functions: **sortNumbers, popRandom, random, last, symmetricDifference**
- Extending **JS.Promise** with functions: **fireAndForget**
- Providing functions related to generating random IDs: **generateInputId** (useful for html inputs), **generateDocumentId**
- **loop** iterator so you don't have to iterate over unfilled Arrays anymore
- **LocalStorage** opinionated wrapper

### Types

- **Flatten** - Takes a type T and tries to flatten its type hierarchy by combining all of its properties into a single, non-nested type. _Borrowed from TypeScript Grand Wizard **Matt Pocock** [@mattpocock](https://www.github.com/mattpocock) (he calls it Prettify, see here: https://www.youtube.com/watch?v=2lCCKiWGlC0 )_.
- **DeepFlatten** - Does what `Flatten` sometimes can't in more complicated and nested object types.

## Installation / Import

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
MATH:
Math.randomInt(1, 2);                               // --> '1' OR '2'

ARRAY:
[13,67,4,24,566].sortNumbers();                     // --> '[4, 13, 24, 67, 566]'
[1, 2, 3].random();                                 // --> get one item from provided array
[1, 2, 3].random(2);                                // --> get two item from provided array
[1, 2, 3].popRandom();                              // --> pop one item from provided array
[1, 2, 3].symmetricDifference([1, 2, 3, 3, 4]);     // --> '{ diffBase: [], diffCompared: [4] }'

PROMISE:
new Promise( ... ).fireAndForget();                 // --> 'undefined' - simply fires a Promise
new Promise( ... ).fireAndForget(true);             // --> 'undefined' - simply fires a Promise + logs errors

OTHER:
generateInputId('select', 'project-role');          // --> '@id_4796_5196_input_select_data_project-role'
generateDocumentId();                               // --> '20230525_022358_902Z_420'
loop(5).forEach(index => { ... });                  // --> 'undefined' - loops 5 times
loop(5).map(index => ({index: `${index}`}));        // --> '{index: string}[]' - loop 5 times and returns 5-element typed array
LocalStorage.setItem(`user`, {user: 'John'})
```
