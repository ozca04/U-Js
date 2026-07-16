/* ============================================================
   FUNCTION + IF/ELSE
   isSnakeEyes: returns different output based on a condition.
   ============================================================ */

function isSnakeEyes(die1, die2){
    if(die1 === 1 && die2 === 1){
        console.log('Snake Eyes!')
    }else{
        console.log('Not Snake Eyes!')
    }
}

isSnakeEyes(2, 1);