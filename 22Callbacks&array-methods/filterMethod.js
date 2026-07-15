// const num = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// const odds = num.filter(n => {
//     return n % 2 === 1;// our callback returns true or false
//     //if it ireturns true, n is added to the filtered array
// })
// //[9,7,5,3,1]

// const smallNums = num.filter(n => n < 5);
// //[4,3,2,1]


function validUserNames(usernames) {
return usernames.filter(n => n.length < 10);
}

console.log(validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']))


