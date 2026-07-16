/* ============================================================
   PATTERN: TRANSFORM EACH ITEM
   Capitalize the first letter of every word into a new array.
   ============================================================ */

function capitalizeAll(words){
    let result = [];
    for(let i = 0; i < words.length; i++){
        let word = words[i];
        result.push(word[0].toUpperCase() + word.slice(1));
    }
    return result;
}

console.log(capitalizeAll(["cat", "dog"]));