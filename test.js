function longWords(words){
    return words.filter(n => n.length > 5)
}

const nums = [3, 8, 12, 5]

const result = nums.map(n => n*2)

function smallNumbers(numm){
    return numm.filter(n => n > 6)
}

const welcomeText = document.querySelector('#header');
welcomeText.innerText = 'welcome';

const activeCards = document.querySelectorAll('.card')
activeCards.forEach(card => {
    activeCards.classList.add('active')
})

const newLi = document.createElement('li')
newLi.append('new item')

list.appendChild(newLi)

const button = document.querySelector('button')
button.innerText = 'Submit'


const nums = [2, 4, 6];
const total = nums.reduce((sum, n) => sum + n);
console.log(total); // 12