import { comments } from "./comments.js";
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersFrom5 = numbers.filter((number) => number >= 5);

console.log("Массив чисел от 1 до 10:", numbers);
console.log("Числа, начиная с 5:", numbersFrom5);

const movies = [
  "Матрица",
  "Интерстеллар",
  "Начало",
  "Бойцовский клуб",
  "Зелёная миля",
];

const hasInterstellar = movies.includes("Интерстеллар");
const hasTitanic = movies.includes("Титаник");

console.log("Массив фильмов:", movies);
console.log('Есть ли "Интерстеллар" в массиве?', hasInterstellar);
console.log('Есть ли "Титаник" в массиве?', hasTitanic);

function reverseArray(array) {
  const result = [];

  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }

  return result;
}

const reversedNumbers = reverseArray(numbersFrom5);
const reversedMovies = reverseArray(movies);

console.log("Перевёрнутый массив чисел:", reversedNumbers);
console.log("Перевёрнутый массив фильмов:", reversedMovies);

export {
  numbers,
  numbersFrom5,
  movies,
  reverseArray,
  reversedNumbers,
  reversedMovies,
};

const comEmails = comments.filter((comment) => comment.email.includes(".com"));
console.log(comEmails);

const updatedComments = comments.map((comment) => {
  return {
    ...comment,
    postId: comment.id <= 5 ? 2 : 1,
  };
});
console.log(updatedComments);

const shortComments = comments.map((comment) => {
  return {
    id: comment.id,
    name: comment.name,
  };
});

console.log(shortComments);
const commentsWithValidity = comments.map((comment) => {
  return {
    ...comment,
    isInvalid: comment.body.length > 180,
  };
});

console.log(commentsWithValidity);
const emailsReduce = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

console.log(emailsReduce);

const emailsMap = comments.map((comment) => comment.email);

console.log(emailsMap);
const emailsAsStringToString = emailsMap.toString();
const emailsAsStringJoin = emailsMap.join(", ");

console.log(emailsAsStringToString);
console.log(emailsAsStringJoin);
