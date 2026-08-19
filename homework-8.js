// Задание 3: объект с личными данными
const person = {
  firstName: "Дарья",
  lastName: "Князева",
  email: "darya@example.com",
  job: "Онлайн-школа",
  position: "Учитель математики и информатики",
  age: 24,
  country: "Россия",
  city: "Омск",
};

console.log(person);

// Задание 4: объект с данными об автомобиле
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  color: "Белый",
  transmission: "Автоматическая",
};

car.owner = person;

console.log(car);

// Задание 5: функция добавляет "максимальную скорость", если её ещё нет
function addMaxSpeed(carObject) {
  if ("maxSpeed" in carObject) {
    return;
  }
  carObject.maxSpeed = 210;
}

addMaxSpeed(car);
console.log(car);
addMaxSpeed(car);
console.log(car);

// Задание 6: выводит значение указанного свойства объекта
function logProperty(obj, propertyName) {
  console.log(obj[propertyName]);
}

logProperty(car, "brand");
logProperty(person, "city");

// Задание 7: массив названий продуктов
const products = ["Мусс увлажняющий", "Маска увлажняющая", "Гель для умывания"];
console.log(products);

// Задание 8: массив книг (объектов)
const books = [
  {
    title: "Гарри Поттер и философский камень",
    author: "Дж. Роулинг",
    year: 1997,
    coverColor: "Жёлтый",
    genre: "Фэнтези",
  },
  {
    title: "1984",
    author: "Дж. Оруэлл",
    year: 1949,
    coverColor: "Красный",
    genre: "Антиутопия",
  },
  {
    title: "Мастер и Маргарита",
    author: "М. Булгаков",
    year: 1967,
    coverColor: "Чёрный",
    genre: "Магический реализм",
  },
];

books.push({
  title: "Дюна",
  author: "Ф. Герберт",
  year: 1965,
  coverColor: "Оранжевый",
  genre: "Фантастика",
});

console.log(books);

// Задание 9: второй массив — книги вселенной Гарри Поттер
const harryPotterBooks = [
  {
    title: "Гарри Поттер и Тайная комната",
    author: "Дж. Роулинг",
    year: 1998,
    coverColor: "Зелёный",
    genre: "Фэнтези",
  },
  {
    title: "Гарри Поттер и узник Азкабана",
    author: "Дж. Роулинг",
    year: 1999,
    coverColor: "Синий",
    genre: "Фэнтези",
  },
];

const allBooks = [...books, ...harryPotterBooks];

console.log(allBooks);

// Задание 10: добавляем свойство isRare в зависимости от года выпуска
function markRareBooks(booksArray) {
  return booksArray.map((book) => {
    return {
      ...book,
      isRare: book.year > 2000,
    };
  });
}

const booksWithRarity = markRareBooks(allBooks);
console.log(booksWithRarity);
