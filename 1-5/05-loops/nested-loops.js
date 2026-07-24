/* ============================================================
   NESTED LOOPS
   A loop inside a loop. Outer picks a row, inner walks that row.
   Used for 2D data (a grid / array of arrays).
   ============================================================ */

// for(let i = 1; i <= 10; i++){
//     console.log(`i is: ${i}`)
//     for(let j = 1; j < 4; j++){
//         console.log(`j is: ${j}`)
//     }
// }

////////////
const table = [
    ['aaaaa','bbbbb','cccccc'],
    ['ddddd','fffff','eeeee'],
    ['ggggg','hhhhh','iiiii']
]

for(let i = 0; i< table.length; i++){
    const row = table[i];
    console.log(` ROW #${i + 1}`)
    for(let j = 0; j < row.length; j++){
        console.log(row[j])
    }
}