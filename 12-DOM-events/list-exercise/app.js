const form = document.querySelector('form');
const product = document.querySelector('#product');
const qty = document.querySelector('#qty');
const ul = document.querySelector('#list')



form.addEventListener('submit', function(e){
    e.preventDefault();
    const productName = product.value;
    const productQty = qty.value;
    const newLi = document.createElement('li');
    newLi.innerText = `${productQty} ${productName}`;
    ul.append(newLi);
    product.value = "";
    qty.value = "";

});

ul.addEventListener('click', function(e){
   e.target.nodeName === 'LI' && e.target.remove()
})