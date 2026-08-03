//JSON.stringify(obj) → turns a JS object into a JSON string (what you send)
//JSON.parse(str) → turns a JSON string back into a usable object (what you receive)
//string "hi", number 25, boolean true / false, null null, object { }, array [ ]

const person = { name: "Ali", age: 25, skills: ["js", "sql"] };

const jsonString = JSON.stringify(person);
console.log(jsonString);
// '{"name":"Ali","age":25,"skills":["js","sql"]}'
JSON.stringify(person, null, 2); //The 2 means "indent with 2 spaces." Useful when you want to read the output. (The null is a rarely-used filter slot — ignore it for now.)

const me = { name: "canberk", age: 22, hobbies: ["game", "cook"] };
const meString = JSON.stringify(me, null, 3);
console.log(meString);

// You have a user object in your code
const user = { name: "canberk", score: 150, level: 3 };

// SAVE it — localStorage only takes strings, so stringify first
localStorage.setItem("user", JSON.stringify(user));
// stored as text: '{"name":"canberk","score":150,"level":3}'

// LOAD it — what comes out is a STRING, useless as-is
const saved = localStorage.getItem("user");
console.log(saved.name); // undefined ❌ — it's text, not an object yet

// parse it back into a real object
const user = JSON.parse(saved);
console.log(user.name); // "canberk" ✅ — now it's usable
