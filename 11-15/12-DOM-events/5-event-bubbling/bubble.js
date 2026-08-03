button.addEventListener('click', function(e){
    nameOfTheId.style.backgroundColor = makeRandColor()
    e.stopPropagation()//this is to prevent bubbling 
})