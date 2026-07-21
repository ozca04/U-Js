//Document Object Model
//On a website, using console and typing #document, u can see the files 
const allImages = document.getElementsByTagName('')// gets element by their tag names 'img' 'div' 'p'// selector 
document.getElementsByClassName('')//gets element by their class name //selector

//querySelector // it lets u select stuff like u do in css. 
//it just gives the first match 
document.querySelector('p')
document.querySelector('#banner')// to select id use #
document.querySelector('.square')// to select by class use .
document.querySelector('a[title="java"]')//select by attributes 

document.querySelectorAll()//not just the first pick but gives all back 
//////////
document.querySelector('p').innerText//just the content 
// save it in const to edit it 
document.querySelector('p').textContent//shows hidden content as well such as 'b'

//innerHTML--only this can add elements into other elements 

//Attributes 
const firstLink = document.querySelector('a')

document.querySelector('#banner').id
document.querySelector('#banner').scr
document.querySelector('#banner').href
document.querySelector('#banner').title

firstLink.getAttribute('href')
firstLink.getAttribute('id')
firstLink.getAttribute('class')

firstLink.setAttribute('title')
firstLink.setAttribute('href', 'http://www.google.com')
///////////////////////////////////
document.querySelectorAll('input')[1]//makes u access the second one 
const input = document.querySelector('input[type="text"]')

input.type = 'color'

const heading = document.querySelector('h4');
heading.textContent = 'New text here';

//////////CHANGING STYLE//////////////////

const allLinks = document.querySelectorAll('a');
for(let link of allLinks){
    link.style.color = 'blue'
}///this way is not a good idea, but when U wanna use js for styling ur css sheet will not be seen at firts before assigning a class

window.getComputedStyle(h1).color//can be used for anything fontSize/family/margin etc.




 const container = document.querySelector('#container')
container.style.textAlign = 'center'

const img = document.querySelector('img')
img.style.width = '150px'
img.style.borderRadius = '50%'