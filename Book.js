class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  showInfo() {
    console.log(`«${this.title}», автор: ${this.author}`);
  }
}

class EBook extends Book {
  constructor(title, author, format) {
    super(title, author);
    this.format = format;
  }

  showFormat() {
    console.log(`Формат электронной книги: ${this.format}`);
  }
}

const paperBook = new Book("Капитанская дочка", "Александр Пушкин");

const electronicBook = new EBook(
  "Алиса в Стране чудес",
  "Льюис Кэрролл",
  "EPUB",
);

paperBook.showInfo();

electronicBook.showInfo();
electronicBook.showFormat();
