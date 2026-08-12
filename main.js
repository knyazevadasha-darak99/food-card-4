const productCards = document.querySelectorAll('.card');
const changeColorAllCardButton = document.querySelector('#change-color-all-card');
const purpureColorHash = '#8000FF';
const pinkColorHash = '#FFC0CB';

changeColorAllCardButton.addEventListener('click', () => {productCards.forEach((card) => card.style.backgroundColor = purpureColorHash)})

const firstProductCard = document.querySelector('.card');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {firstProductCard.style.backgroundColor = pinkColorHash;}) 

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
    const answer = confirm("Вы действительно хотите открыть Google?");

    if (answer === true) {
        window.open('https://google.com')
    } else{
        return; 
    }
}

const outputConsoleLogButton = document.querySelector('#output-console-log');

outputConsoleLogButton.addEventListener('click', () => {
    console.log('Магазин косметики');
});

const title = document.querySelector('.catalog__title');

title.addEventListener('mouseover', () => {
    console.log(title.textContent);
});

const toggleColorButton = document.querySelector('#toggle-color-button');

toggleColorButton.addEventListener('click', () => {
    toggleColorButton.classList.toggle('button--active');
});