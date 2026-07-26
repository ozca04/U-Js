// function maxOf(arr){
//     let bigNum = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > bigNum){
//             bigNum = arr[i]
//         }
//     }
//     return bigNum
// };

// let nums = [2, 3, 5, 7, 11, 13, 17];

// console.log(maxOf(nums))

// const button = document.querySelector('#btn');
// const text = document.querySelector('h1');

// button.addEventListener('click', function(){
//     text.innerText = 'clicked!'
// })

// const user = { name: 'Sara', age: 25, city: 'Oslo' };
// const {name, age} = user;

// let nums = [2, 3, 5, 7, 11, 13, 17];

// function minOf(arr){
//     let numm = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(numm > arr[i]){
//             numm = arr[i]
//         }
//     }
//     return numm
// }

// console.log(minOf(nums))

const products = ['pen', 'notebook', 'eraser', 'highlighter', 'pin'];

const result = products
    .filter(n => n.length > 5)   // keep the long ones → ['notebook', 'highlighter']
    .map(n => n.toUpperCase());  // uppercase each     → ['NOTEBOOK', 'HIGHLIGHTER']

console.log(result) 