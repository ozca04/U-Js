# JS Notes — Organized

Your notes, reordered to follow the course from start to where you are now (Section 22: Callbacks & Array Methods). Folders are numbered so they read top-to-bottom in learning order. Every file has a header comment saying what it teaches. **Your code is unchanged** — only organized and labeled.

## Map

**01-basics/** — strings, string methods, template literals, the Math object, shorthand operators (`+=` etc), early random/conditional practice.

**02-logical-operators/** — `&&` (AND), `||` (OR), `!` (NOT).

**03-arrays/** — creating arrays, array methods (push/pop/slice/splice/etc), nesting arrays & objects.

**04-objects/** — creating objects (key:value, dot vs bracket access), modifying them.

**05-loops/** — the four loops: `for`, `while`, `for...of`, `for...in`, plus nested loops.

**06-functions/** — defining/calling, the `return` keyword, and the exercise patterns:
- count matches (`04-count-evens`)
- sum / count / longest (`05`)
- check each character (`06-count-vowels`)
- build a new array (`07-only-evens`)
- transform each item (`08-capitalize-all`)
- return from a lookup (`09-return-day`)

**07-advanced-functions/** — scope, passing functions as arguments, functions returning functions, methods, the `this` keyword, try/catch.

**08-callbacks-and-array-methods/** — `forEach`, `map`, `filter`, `some`/`every`, `reduce`, arrow functions (all formats), arrows + `this`, `setTimeout`/`setInterval`.

**09-projects/** — calculator (has its own HTML+CSS), guessing game (HTML+JS), todo list (HTML+JS). Each project folder is self-contained — open the `.html` to run it.

**quiz-practice/** — your worked quiz answers on the loop patterns.

## The one idea that ties it together

Sections 06 and 08 are the same skill twice:
- **06** = writing the loop by hand (`for` + `if` + `push`/`count++`/`sum +=`).
- **08** = letting a method do the loop for you (`map` / `filter` / `forEach` / `reduce`).

If a file's logic ever looks fuzzy, find its by-hand version in `06-functions/` — the method version in `08` is just the shortcut.

## Small notes left in the code

A few files had leftover typos or scratch bits. I kept the code exactly as you wrote it but added a `NOTE:` comment flagging them (in `01-basics/password-check-scratch.js`, `06-functions/03-return-keyword.js`, and `08-.../05-reduce.js`) so future-you knows they're known, not mysteries.
