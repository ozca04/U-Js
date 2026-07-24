/* ============================================================
   PATTERN: BUILD A NEW ARRAY
   Start empty [] -> loop -> if match, push -> return.
   (countBigWords kept commented at top as earlier practice.)
   ============================================================ */

// function countBigWords (word){
//      let arr = 0;
//      for(let i = 0; i < word.length; i++){
//         if(word[i].length > 3){
//             arr++
//         }
//      }
//      return arr
//  }
//  console.log(countBigWords(["hi", "hello", "cat", "world"]))
//  ///////////////////////////


function onlyEvens(numm){
    let evens = [];
    for(let i = 0; i < numm.length; i++){
        if(numm[i] % 2 === 0){
            evens.push(numm[i])
        }
    }
    return evens
}
    console.log(onlyEvens([1, 2, 3, 4, 5, 6, 8, 7, 10]))

