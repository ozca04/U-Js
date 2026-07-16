/* ============================================================
   PATTERN: COUNT MATCHES
   counter starts at 0 -> loop -> if match, count++ -> return count.
   ============================================================ */

function countEvens(numbers){
let amount = 0;
for (let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 ===0){
        amount++
    }
}
return amount
}
console.log(countEvens([2, 5, 7, 4, 6, 8]))