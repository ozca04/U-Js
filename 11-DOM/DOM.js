/* ============================================================
   THE DOM — COMPLETE REFERENCE  (Section 24)
   ------------------------------------------------------------
   The DOM (Document Object Model) is the browser's version of
   your HTML, turned into objects JavaScript can read and change.
   'document' is the entry point — everything starts from it.

   Tip: type  document  in the browser console to explore the page.
   ============================================================ */


/* ============================================================
   THE CORE PATTERN
   Almost everything in the DOM is two steps: SELECT, then CHANGE.
   ============================================================ */

const el = document.querySelector('h1');   // 1. SELECT an element
el.textContent = 'New heading';            // 2. DO something to it

// That's the whole game. The rest of this file is vocabulary
// for each half.


/* ============================================================
   1. SELECTING ELEMENTS
   ============================================================ */

// ---- THE MODERN WAY (use these) ----
// querySelector uses CSS selector syntax — same strings you'd
// write in a stylesheet. One syntax covers ids, classes, tags,
// attributes. That's why it's the one worth mastering.

document.querySelector('p');                  // first <p>
document.querySelector('#banner');            // by id     -> #
document.querySelector('.square');            // by class  -> .
document.querySelector('a[title="java"]');    // by attribute
document.querySelector('input[type="text"]'); // attribute — targets the right input

document.querySelectorAll('p');               // ALL matches, not just the first

// querySelector    -> ONE element (the first match), or null if none
// querySelectorAll -> a NodeList of all matches (list-like; loop over it)


// ---- THE OLDER WAY (you'll see it in tutorials) ----
// These still work, but querySelector does everything they do
// with one consistent syntax. Learn them for READING other
// people's code; WRITE the modern ones.

document.getElementById('banner');            // one element, no # needed
document.getElementsByTagName('img');         // all <img>
document.getElementsByClassName('square');    // all .square


// ---- INDEXING INTO A LIST ----
document.querySelectorAll('input')[1];        // the SECOND input (index starts at 0)


/* ============================================================
   2. READING & CHANGING CONTENT
   ============================================================ */

const p = document.querySelector('p');

p.innerText;    // visible text only (respects styling, ignores hidden text)
p.textContent;  // ALL text, including hidden text and whitespace
p.innerHTML;    // the HTML inside — can read AND insert tags

// Changing them:
p.textContent = 'Just text';
p.innerHTML = 'Text with <b>bold</b> inside';   // tags actually get rendered

/*  WHICH TO USE:
    textContent -> you're setting plain text        (safest, fastest)
    innerText   -> you want only what's visible on screen
    innerHTML   -> you need to insert real HTML elements

    !! innerHTML is the ONLY one that can add elements, but it's
    also the risky one. Never set innerHTML from user input
    (security hole). For plain text, always use textContent.      */


/* ============================================================
   3. ATTRIBUTES
   Attributes are the things inside the HTML tag:
   src, href, id, alt, title, type ...
   ============================================================ */

// ---- DIRECT PROPERTY ACCESS (shortcut) ----
const link = document.querySelector('#banner');

link.id;
link.href;
link.title;
link.src;                            // note: src — not "scr"

link.href = 'https://google.com';    // change it


// ---- get/setAttribute (works for ANY attribute) ----
const firstLink = document.querySelector('a');

firstLink.getAttribute('href');
firstLink.getAttribute('class');

firstLink.setAttribute('href', 'https://www.google.com');
firstLink.setAttribute('title', 'Go to Google');
// setAttribute(name, value) — 1st arg = WHICH attribute, 2nd = NEW value


// ---- WORKED EXAMPLE: swapping an image ----
const img = document.querySelector('img');
img.setAttribute('src', 'https://images.unsplash.com/photo-1581061090142-c2cd0ec9f021?w=200');
img.setAttribute('alt', 'chicken');

/*  ATTRIBUTE vs CONTENT:
    setAttribute changes what's IN the tag.
    textContent  changes what's BETWEEN the tags.
    Different jobs.                                               */


/* ============================================================
   4. STYLES
   ============================================================ */

// ---- SETTING INLINE STYLES ----
const container = document.querySelector('#container');
container.style.textAlign = 'center';

const image = document.querySelector('img');
image.style.width = '150px';
image.style.borderRadius = '50%';

/*  TWO RULES:
    1. CSS names become camelCase:
       text-align -> textAlign
       border-radius -> borderRadius
       font-size -> fontSize
    2. Values are STRINGS and units are required:
       '150px'  not  150                                          */


// ---- READING STYLES ----
const h1 = document.querySelector('h1');

window.getComputedStyle(h1).color;      // the ACTUAL current color
window.getComputedStyle(h1).fontSize;   // works for any property

// element.style.color only reads INLINE styles.
// To see what's actually applied (from your stylesheet),
// use getComputedStyle.


/*  !! WHY YOU USUALLY SHOULDN'T DO THIS
    Setting styles one property at a time in JS is messy and
    fights your stylesheet. The better approach: define a class
    in CSS, then toggle it with JavaScript (see section 5).

    Use .style for one-off dynamic values (a progress bar width,
    a random color). Use classes for everything else.             */


/* ============================================================
   5. classList — THE RIGHT WAY TO STYLE
   Define the look in CSS, flip it on and off in JS.
   ============================================================ */

const h2 = document.querySelector('h2');

h2.classList.add('highlight');       // add a class
h2.classList.remove('highlight');    // remove it
h2.classList.toggle('highlight');    // add if missing, remove if present
h2.classList.contains('highlight');  // true / false

// toggle is the star — it's what "flip this on/off" and
// "invert these" tasks need.


// ---- WORKED EXAMPLE: inverting a class on every item ----
const items = document.querySelectorAll('li');

items.forEach((li) => {
    li.classList.toggle('highlight');
});
// Items that had the class lose it; items that didn't, get it.
// One line, no if statement needed.


/* ============================================================
   6. LOOPING OVER ELEMENTS
   querySelectorAll gives a LIST. You can't style the whole list
   at once — you have to loop.
   ============================================================ */

// ---- forEach (most common) ----
const allLinks = document.querySelectorAll('a');

allLinks.forEach(lnk => {
    lnk.style.color = 'blue';
});


// ---- for...of (also fine) ----
for (let lnk of allLinks) {
    lnk.style.color = 'blue';
}


// ---- WHEN YOU NEED THE INDEX ----
// forEach hands you a SECOND parameter: the item's position.
// Use it to line up two lists by index.

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const spans = document.querySelectorAll('span');

spans.forEach((span, i) => {
    span.style.color = colors[i];   // span 0 -> colors[0], span 1 -> colors[1] ...
});

// Same "pair things up by index" idea as days[day - 1] in the
// returnDay exercise. The index is the bridge between two lists.

/*  COMMON ERROR:
    document.querySelectorAll('span').style.color = 'red';   // FAILS
    A LIST has no .style — individual elements do. Always loop.   */


/* ============================================================
   7. MOVING AROUND THE TREE (TRAVERSAL)
   Elements are nested, so you can navigate to relatives.
   ============================================================ */

const b = document.querySelector('b');
const div = document.querySelector('div');

b.parentElement;      // the element containing it (ONE)
div.children;         // all elements inside it (a LIST)
div.children[1];      // the second child

const firstImg = document.querySelector('.Img');

firstImg.nextElementSibling;      // the next element at the same level
firstImg.previousElementSibling;  // the one before it

// Chain them if needed:  b.parentElement.parentElement
// Useful when you have one element and need a related one —
// e.g. clicking a button and needing the <li> it lives in.


/* ============================================================
   8. CREATING & INSERTING ELEMENTS
   Creating an element makes it IN MEMORY ONLY.
   It doesn't appear until you attach it to the page.
   ============================================================ */

// 1. create
const newImg = document.createElement('img');

// 2. configure
newImg.src = 'https://example.com/photo.jpg';
newImg.classList.add('rounded');

// 3. attach — NOW it appears
document.body.appendChild(newImg);

// Forgetting step 3 is the classic bug: the element exists
// but nothing shows up on the page.


// ---- THE INSERTION METHODS ----
// parent.appendChild(child)   add to the END of parent
// parent.append('text')       add to the end — accepts text AND elements
// parent.prepend('text')      add to the START

const osman = document.querySelector('p');
osman.append('new text');
osman.prepend('osman');

// append is the newer, more flexible one (takes strings, multiple
// items). appendChild only takes a single element node.


// ---- PRECISE PLACEMENT ----
const newH2 = document.createElement('h2');
newH2.append('text added');

const heading = document.querySelector('h1');
heading.insertAdjacentElement('afterend', newH2);

/*  THE FOUR POSITIONS:

    <!-- beforebegin -->
    <h1>
      <!-- afterbegin -->
      Existing content
      <!-- beforeend -->
    </h1>
    <!-- afterend -->                                             */


// ---- REMOVING ----
// element.remove();                  // delete it
// parent.removeChild(childElement);  // older way


/* ============================================================
   9. WORKED EXAMPLE — 100 BUTTONS
   Ties together: loop + create + configure + append
   ============================================================ */

const btnContainer = document.querySelector('#container');

for (let i = 0; i < 100; i++) {
    const btn = document.createElement('button');
    btn.innerText = 'Hey!';
    btnContainer.appendChild(btn);
}

/*  Why btnContainer is OUTSIDE the loop: you only need to find
    it once. The three button lines go INSIDE because you want a
    fresh button each pass.

    Same principle as an accumulator loop — what stays constant
    goes outside, what repeats goes inside.                       */


/* ============================================================
   GOTCHAS WORTH MEMORIZING
   ============================================================ */

/*  SCRIPT PLACEMENT
    Put <script src="app.js"></script> right before </body>,
    NOT in the <head>. The browser reads top to bottom — a script
    in the head runs before the elements exist, so every
    querySelector returns null.

        <script src="app.js"></script>
      </body>

    LISTS DON'T HAVE PROPERTIES
    querySelectorAll(...).style doesn't work. Loop instead.

    camelCase FOR CSS IN JS
    backgroundColor, not background-color.

    UNITS ARE REQUIRED
    '150px', not 150.

    document. PREFIX
    It's document.getElementById(...), never bare getElementById(...).

    CREATED != VISIBLE
    createElement alone shows nothing. You must append it.        */


/* ============================================================
   QUICK REFERENCE

   Select one        document.querySelector('.cls')
   Select all        document.querySelectorAll('.cls')
   Change text       el.textContent = 'hi'
   Insert HTML       el.innerHTML = '<b>hi</b>'
   Read attribute    el.getAttribute('href')
   Set attribute     el.setAttribute('href', url)
   Inline style      el.style.fontSize = '20px'
   Read real style   getComputedStyle(el).color
   Add class         el.classList.add('x')
   Flip class        el.classList.toggle('x')
   Loop elements     els.forEach(el => { ... })
   Loop with index   els.forEach((el, i) => { ... })
   Parent            el.parentElement
   Children          el.children
   Next sibling      el.nextElementSibling
   Create            document.createElement('div')
   Append            parent.appendChild(el)
   Remove            el.remove()
   ============================================================ */


/* ============================================================
   WHAT'S NEXT

   Everything here CHANGES the page — but nothing yet RESPONDS
   to the user. That's Section 25: DOM Events (addEventListener),
   where clicks, typing, and hovering trigger your code.

   Selecting and changing is the vocabulary.
   Events are what make it interactive.
   ============================================================ */

  