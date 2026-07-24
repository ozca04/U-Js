const input = document.querySelector('input')
const h1 = document.querySelector('h1')

input.addEventListener('input', function(e){
    h1.innerText = input.value
})

/////////////////////////////////////////////////
const inputt = document.querySelector('#username')
const h2 = document.querySelector('h2')

inputt.addEventListener('input', function(e){
    if(inputt.value === ''){
        h2.innerText = 'Enter Your Username';
    } else {
        h2.innerText = `Welcome, ${inputt.value}`;
    }
});