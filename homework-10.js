import { products } from "./products.js";

function createProductCard(product) {
  return `
    <li class="products__item card">
      <img src="${product.image}" alt="Товар - ${product.name}" class="card__image" />
      <span class="card__category">${product.category}</span>
      <h2 class="card__name">${product.name}</h2>
      <p class="card__description">${product.description}</p>

      <div class="card__compound compound">
        <span class="compound__name">Состав:</span>
        <ul class="compound__list">
          ${product.compound.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>

      <div class="card__price">
        <b>Цена</b>
        <span>${product.price}</span>
      </div>
    </li>
  `;
}

function renderProducts(productsArray) {
  const list = document.getElementById("products-list");
  list.innerHTML += productsArray
    .map((product) => createProductCard(product))
    .join("");
}

const productDescriptions = products.reduce((acc, product) => {
  acc[product.name] = product.description;
  return acc;
}, {});

console.log(productDescriptions);
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
