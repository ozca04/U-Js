//there are 3 methods of doing this 
//first one is inline to html


//second one is 
const btn = document.querySelector('#mainButton')

function scream (){
    console.log('AAAAAAAAAAAAAAAAAAAAAA')
}

btn.onclick = function(){
    console.log('button clicked')
}

btn.onmouseenter = scream;

//third one is 
//best method, unlike others it allow u to run multiple function in one item
const btnV3 = document.querySelector('#secondaryButton')

//first thing is what event
btnV3.addEventListener('click', function(){
    alert('clicked')
})

function shout(){
    console.log('shout')
}
function twist(){
    console.log('twist')
}

const buttonForScream = document.querySelector('#button3')

buttonForScream.addEventListener('click', shout, {once:true})
buttonForScream.addEventListener('click', twist)
buttonForScream.addEventListener('click', () => {})
