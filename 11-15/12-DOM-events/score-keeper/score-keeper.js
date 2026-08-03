//const p1Button = document.querySelector('#p1Button');//Button
//const p2Button = document.querySelector('#p2Button');//Button
// const p1Display = document.querySelector('#p1Display');//display
// const p2Display = document.querySelector('#p2Display');//display
// const resetButton = document.querySelector('#resetButton');//button/reset
// const gameNumber = document.querySelector('#gameNumber');

// let p1Score = 0;
// let p2Score = 0;
// let winningScore = 5;
// let isGameOver = false;

// p1Button.addEventListener('click', function(){
// if(!isGameOver){
//     p1Score += 1; 
//     if(p1Score === winningScore){
//         isGameOver = true;
//         p1Display.classList.add('has-text-success')
//         p2Display.classList.add('has-text-danger')
//         p1Button.disabled = true;
//         p2Button.disabled = true;
//     }
//     p1Display.textContent = p1Score;
// }
// });
// p2Button.addEventListener('click', function(){
// if(!isGameOver){
//     p2Score += 1; 
//     if(p2Score === winningScore){
//         isGameOver = true;
//         p1Display.classList.add('has-text-danger')
//         p2Display.classList.add('has-text-success')
//         p1Button.disabled = true;
//         p2Button.disabled = true;
//     }
//     p2Display.textContent = p2Score;
// }
// });
// gameNumber.addEventListener('change', function(){
//     winningScore = parseInt(this.value)
//     reset();
// })

// resetButton.addEventListener('click', reset)
// function reset(){
//     isGameOver = false;
//     p1.score = 0;
//     p2.score = 0;
//     p1.display.textContent = 0;
//     p2.display.textContent = 0; 
//     p1.display.classList.remove('has-text-danger', 'has-text-success')
//     p2.display.classList.remove('has-text-danger', 'has-text-success')
//     p1.button.disabled = false;
//     p2.button.disabled = false;
// }
//------------------------------------------------------------------------SHORTER WAY ------------------------------------------------------------------
const resetButton = document.querySelector('#resetButton');//button/reset
const gameNumber = document.querySelector('#gameNumber');

let winningScore = 5;
let isGameOver = false;
const p1 = {
    score: 0, 
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0, 
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}
function uppdateScores(player, opponent){
    if(!isGameOver){
        player.score += 1; 
        if(player.score === winningScore){
            isGameOver = true;
            player.display.classList.add('has-text-danger')
            opponent.display.classList.add('has-text-success')
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
};
gameNumber.addEventListener('change', function(){
        winningScore = parseInt(this.value)
        reset();
})
p1.button.addEventListener('click', function(){
    uppdateScores(p1, p2)
})
p2.button.addEventListener('click', function(){
    uppdateScores(p2, p1)
})

resetButton.addEventListener('click', reset)
function reset(){
    isGameOver = false;
    for(let p of [p1,p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-danger', 'has-text-success')
        p.button.disabled = false;
    }
}
//--------------------------------------------------------------------------------------------------------------------------
