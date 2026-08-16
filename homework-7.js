//Задание 3

function showWeather(city, temperature) {
  console.log(
    `Сейчас в ${city} температура — ${temperature} градусов по Цельсию`,
  );
}

showWeather("Москве", 18);

//Задание 4

const speedOfLight = 299792458;

function checkSpeed(speed) {
  if (speed > speedOfLight) {
    console.log("Сверхсветовая скорость");
  } else if (speed < speedOfLight) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  }
}

checkSpeed(300000000);
checkSpeed(200000000);
checkSpeed(299792458);

//Задание 5
const product = "Ноутбук";
const productPrice = 55000;

function buyProduct(budget) {
  if (budget >= productPrice) {
    console.log(`${product} приобретён. Спасибо за покупку!`);
  } else {
    const difference = productPrice - budget;
    console.log(`Вам не хватает ${difference}$, пополните баланс`);
  }
}

buyProduct(60000);
buyProduct(30000);

//Задание 6
function greetUser() {
  console.log("Добро пожаловать в магазин!");
}

greetUser();

//Задание 7
const userName = "Дарья";
const userAge = 24;
const isStudent = true;
