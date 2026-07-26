// function countVowels(str){
//     const vowels = ['a','e','i','o','u'];
//     let count = 0;
//     for(let i = 0; i < str.length; i++){
//         if(vowels.includes(str[i])){
//             count++
//         }
//     }
//     return count;
// }

// console.log(countVowels('ahmad'))

const words = ['cat', 'elephant', 'dog', 'hippo'];
const longLetters = words.filter(n => n.length > 3)