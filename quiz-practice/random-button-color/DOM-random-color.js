const makeRandomColor = () => {
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return `rgb(${r}, ${g}, ${b})`;
}


// const buttons = document.querySelectorAll('#button')
// for(let button of buttons){
//     button.addEventListener('click', function(){
//         button.style.backgroundColor = makeRandomColor();
//     })
// }

// const h1s = document.querySelectorAll('h1')
// for(let h1 of h1s){
//     h1.addEventListener('click', function(){
//         h1.style.backgroundColor = makeRandomColor();
//         h1.style.Color = makeRandomColor();
//     })
// } //  THIS IS TOO LONG SO WE SHORTEN IT USING THIS.


const buttons = document.querySelectorAll('#button')
for(let button of buttons){
    button.addEventListener('click', colorize)
}

const h1s = document.querySelectorAll('h1')
for(let h1 of h1s){
    h1.addEventListener('click', colorize)
}// we make colorizing an different fuction so we can call it in short when we need instead of writing it again and again 

function colorize(){
    this.style.backgroundColor = makeRandomColor();
    this.style.color = makeRandomColor();
}//this is to combine 