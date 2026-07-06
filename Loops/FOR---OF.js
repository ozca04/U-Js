const colors = ['black','white','green','red','blue','purple','pink']

// for(let i = 0; i < colors.length; i++){
//     console.log(`use the color ${colors[i]}`)
//     //console.log(`use the color ${colors[6]}`)break// runs one color once    
// }

for (let name of colors){
    //console.log(name)
}// faster way --for of--

//most common way to use it is with arrays 

const numbers = [1,2,3,4,5,6,7,8,9];

for (let square of numbers){
    console.log(square*square)
}