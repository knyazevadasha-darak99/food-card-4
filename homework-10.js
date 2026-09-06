import { products } from "./products.js";

const productTemplate = document.querySelector(".product-template");
const productList = document.getElementById("products-list");

function renderProducts(productsArray) {
  productsArray.forEach((product) => {
    const productClone = productTemplate.content.cloneNode(true);

    const image = productClone.querySelector(".card__image");
    image.src = product.image;
    image.alt = "Товар - " + product.name;

    productClone.querySelector(".card__category").textContent =
      product.category;
    productClone.querySelector(".card__name").textContent = product.name;
    productClone.querySelector(".card__description").textContent =
      product.description;

    const compoundItems = productClone.querySelectorAll(".compound__item");
    compoundItems.forEach((item, index) => {
      item.textContent = product.compound[index];
    });

    productClone.querySelector(".card__price-value").textContent =
      product.price;

    productList.appendChild(productClone);
  });
}

function getCardsCount() {
  const input = prompt("Сколько карточек отобразить? От 1 до 5");
  const count = Number(input);

  if (!count || count < 1 || count > 5) {
    alert("Нужно ввести число от 1 до 5");
    return getCardsCount();
  }

  return count;
}

const cardsCount = getCardsCount();
const productsToShow = products.slice(0, cardsCount);

renderProducts(productsToShow);

const productDescriptions = products.reduce((acc, product) => {
  acc[product.name] = product.description;
  return acc;
}, {});

console.log(productDescriptions);
