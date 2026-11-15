class Drink {
  #temperature;
  constructor(name, size, price, temperature) {
    if (new.target === Drink) {
      throw new Error("Нельзя создать объект класса Drink");
    }
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }
  getInfo() {
    console.log(this.name);
    console.log(this.price);
    console.log(this.size);
  }
  getTemperature() {
    return this.#temperature;
  }
  setTemperature(newTemperature) {
    this.#temperature = newTemperature;
  }
  #prepare(newTemperature) {
    console.log("Напиток готовится");
    this.setTemperature(newTemperature);
  }
  serve() {
    this.#prepare(70);
  }
}
class Coffee extends Drink {
  constructor(name, size, price, temperature, beans, milk) {
    super(name, size, price, temperature);
    this.beans = beans;
    this.milk = milk;
  }
  serve() {
    super.serve();
    console.log("Кофе приготовлен и подан");
  }
}

class Tea extends Drink {
  constructor(name, size, price, temperature, teaType, additives) {
    super(name, size, price, temperature);
    this.teaType = teaType;
    this.additives = additives;
  }
  serve() {
    super.serve();
    console.log("Чай приготовлен и подан");
  }
}

class Lemonade extends Drink {
  constructor(name, size, price, temperature, ice, flavor) {
    super(name, size, price, temperature);
    this.ice = ice;
    this.flavor = flavor;
  }
  serve() {
    super.serve();
    this.setTemperature(5);
    console.log("Лимонад приготовлен и подан");
  }
}

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  getInfo() {
    console.log(this.name);
    console.log(this.location);
  }
  orderDrink(drink) {
    drink.serve();
  }
}

const cafe = new Cafe("Чашка чая", "Уфа");
cafe.getInfo();

const coffee = new Coffee(
  "Капучино",
  "300 мл",
  "250 рублей",
  "20С",
  "Арабика",
  "Обычное",
);
cafe.orderDrink(coffee);
coffee.getInfo();

const tea = new Tea(
  "Зелёный чай",
  "300 мл",
  "300 рублей",
  "60С",
  "зелёный чай",
  "с жасмином",
);
cafe.orderDrink(tea);
tea.getInfo();

const lemonade = new Lemonade(
  "Лимонад",
  "300мл",
  "150 рублей",
  "5С",
  "со льдом",
  "клубничный",
);
cafe.orderDrink(lemonade);
lemonade.getInfo();
console.log(coffee.getTemperature());
console.log(tea.getTemperature());
console.log(lemonade.getTemperature());
