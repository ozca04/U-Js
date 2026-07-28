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

// const products = ['pen', 'notebook', 'eraser', 'highlighter', 'pin'];

// const result = products
//     .filter(n => n.length > 5)   
//     .map(n => n.toUpperCase());  

// console.log(result) 

// const counter = {
//   count: 0,
//   add() {
//     this.count++;
//     return this.count;
//   }
// };

// console.log(counter.add());
// console.log(counter.add());
// console.log(counter.count);


// const btns = document.querySelectorAll('button')

// for(let i = 0; i < btns.length; i++){
//     btns[i].innerText = 'Click me';
// }


// const input = document.querySelector('input');
// const h1 = document.querySelector('h1');

// input.addEventListener('input', function(){
//     h1.innerText = input.value
// })
///////////////////////////////
///////////////////////////////
// const btn = document.querySelector('button');
// const inpt = document.querySelector('#taskInput');
// const ul = document.querySelector('#taskList');

// btn.addEventListener('click', function(){
//     if(inpt.value !== ''){
//     const li = document.createElement('li')
//     li.innerText = inpt.value;
//     ul.append(li);
//     inpt.value = ''
//     }
// })
///////////////////////////////
///////////////////////////////

// const score  = document.querySelector('h1');
// const increase = document.querySelector('#increment');
// const decrease = document.querySelector('#decrement');
// const res = document.querySelector('#reset');

// let num = 0;

// increase.addEventListener('click', function(){
//     num++
//     score.innerText = num;
// })
// decrease.addEventListener('click', function(){
//     num--;
//     score.innerText = num;
// })
// res.addEventListener('click', function(){
//     num = 0;
//     score.innerText = num;
// })
