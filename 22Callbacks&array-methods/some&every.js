//EVERY 
const words = ['dog', 'cat', 'log', 'bag']

words.every(word =>{
    return word.length === 3; 
})//true 

words.every(word => word[0] === 'd');//false 

words.every(w => {
    let last_letter = w[w.length - 1];
    return last_letter === 'g'
})//true

const exams = [80, 98, 76, 56, 86, 67, 74, 82, 45]

exams.every(score => score >= 40)


//SOME --- its same but if some is true entire thing is true 


function allEvens(num){
    return num.every(n => n % 2 ===0);
}





console.log(allEvens([2,4,6,8]))