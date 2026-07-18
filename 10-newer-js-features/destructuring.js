//deconsturcting from an array 
const scores = [34234, 324234, 43424, 65657, 87678678]

//to copy single element 

const highScore = scores[0]//long way
const secondHighScore = scores[1]//

const [gold, silver] = scores //deconstruction

//decons. from an object 


const user = {
    email: 'ahamd@gmail.com',
    password:'233423423',
    firstName:'ahmad',
    lastName:'elhabib',
    born:1930,
    died:1989,
}
const {email, password, born} = user;
const {born: birthYear}= user

console.log(email)
