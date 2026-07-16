/* ============================================================
   RETURN A VALUE FROM A LOOKUP
   returnDay: long if/else version (commented) vs the
   shorter array version with days[day-1] and a null guard.
   ============================================================ */

// function returnDay(day){
//     if(day === 1){
//         return 'monday'
//     }else if(day === 2){
//         return 'tuesday'
//     }else if(day === 3){
//         return 'Wednesday'
//     }else if(day === 4){
//         return 'Thursday'
//     }else if(day === 5){
//         return 'Friday'
//     }else if(day === 6){
//         return 'Saturday'
//     }else if(day === 7){
//         return 'Sunday'
//     }else{
//         return null
//     }
// }
// returnDay(5)

///////SHORTER WAY////////

function returnDay(day){
    if (day < 1 || day >7){
        return null
    }
    const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    return days[day-1];
}