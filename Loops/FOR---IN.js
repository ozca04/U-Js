const scores ={
    kenan: 80,
    ahmet: 90,
    mahmut: 20,
    ceyhun:100,
    ayse:54,
    fatma:44
}

for (let person in scores){
//    console.log(`${person} scored ${scores[person]}`)
}

console.log(Object.keys(scores))
console.log(Object.values(scores))

let total = 0;
let obje = Object.values(scores)
for(let num of obje){
    total += num    
}
console.log(total/obje.length)