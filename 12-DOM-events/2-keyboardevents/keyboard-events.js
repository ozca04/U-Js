document.querySelector('button').addEventListener('click', function(evt){
    console.log(evt)
})

const input = document.querySelector('input');
// input.addEventListener('keydown', function(){
//     console.log("KEYDOWN")
// })
// input.addEventListener('keyup', function(){
//     console.log("KEYUP")
// })

// input.addEventListener('keydown', function(e){
//     console.log(e.key)//no metter where the letter, it requests that letter 
//     console.log(e.code)//keyboard location of the key 
// })

window.addEventListener('keydown', function(e){
    //switch is a cleaner alternative to a long if / else if chain when you're checking one value against many possible matches
    switch(e.code){ // the value to check
        case 'ArrowUp':// if e.code === 'ArrowUp'
            console.log("UP");
            break;
        case 'ArrowDown':
            console.log("DOWM");
            break;
        case 'ArrowLeft':
            console.log("LEFT");
            break;
        default:
            console.log("IGNORED")
    }
})

