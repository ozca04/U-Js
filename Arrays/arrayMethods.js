//Push --- add to end 
//Pop --- remove from end 
let names = ['ahmet', 'mehmet', 'osman']
let person = names.pop()

names[3] = 'ceyhun'

names.push('mahmut')
names.pop()
///////////////////////
//Shift --- remove from start
//Unshift --- add to start 

///////////////////////
//Concat --- merge arrays
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];

const array3 = array1.concat(array2);

///////////////////////
//Reverse
names.reverse()

///////////////////////
//Slice --- copies a portion on an array
let colors = ['red', 'blue','orange', 'purple', 'black', 'white']
let coolColors = colors.slice(2, 5);

///////////////////////
//Splice --- removes/replaces elements
let animals = ['dog', 'cat', 'sheep', 'cow', 'deer']
let homeAnimals = animals.splice(2, 3, 'rabbit')

const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];


airplaneSeats[3][1] = 'Hugo'
///////////////////////
//console.log(names)
//console.log(person)
//console.log('ceyhun'.indexOf('h'))
//console.log(array3.includes('b'))
//console.log(array3.indexOf('b'))
//console.log(coolColors)
//console.log(animals)// shows what is left 
//console.log(homeAnimals)// shows what has been removed 