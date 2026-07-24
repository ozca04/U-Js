function sum(num){
    console.log(num)
}//multiple numbers will be ignored here, result will give ony the first one as the num 

function sum(...num){
    console.log(num)
}//given numbers or anything will collect under an array 

function example(...nums){
    return nums.reduce((tita, el) => total + el)
}