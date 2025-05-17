const books = [
  {
    name: "1984",
    author: "Джордж Оруэлл",
    genre: "Антиутопия",
    year: 1949,
  },
  {
    name: "Скотный двор",
    author: "Джордж Оруэлл",
    genre: "Антиутопия",
    year: 1945,
  },
  {
    name: "451 градус по Фаренгейту",
    author: "Рэй Брэдбери",
    genre: "Антиутопия",
    year: 1953,
  },
  {
    name: "Гарри Поттер и философский камень",
    author: "Джоан Роулинг",
    genre: "Фэнтези",
    year: 1997,
  },
  {
    name: "Гарри Поттер и тайная комната",
    author: "Джоан Роулинг",
    genre: "Фэнтези",
    year: 1998,
  },
  {
    name: "Собака Баскервилей",
    author: "Артур Конан Дойл",
    genre: "Детектив",
    year: 1902,
  },
  {
    name: "1Q84",
    author: "Харуки Мураками",
    genre: "Роман",
    year: 2009,
  },
  {
    name: "Цветы для Элджернона",
    author: "Дэниел Киз",
    genre: "Драма",
    year: 2000,
  },
  {
    name: "Маленькая жизнь",
    author: "Ханя Янагихара",
    genre: "Драма",
    year: 2015,
  },
  {
    name: "Проект «Автостопом по галактике»",
    author: "Дуглас Адамс",
    genre: "Фантастика",
    year: 2001,
  },
];

const booksXX = books
  .filter((book) => book.year < 2000)
  .map((book) => book.name);

const booksXXI = books
  .filter((book) => book.year >= 2000)
  .map((book) => book.name);

const mostGenre = books
  .filter((book) => {
    return book.genre === "Антиутопия";
  })
  .map((book) => {
    return book.name.toUpperCase();
  });

console.log(`Книги с самым популярным жанром`, mostGenre);
console.log(`Книги 20-го столетия`, booksXX);
console.log(`Книги 21-го столетия`, booksXXI);
