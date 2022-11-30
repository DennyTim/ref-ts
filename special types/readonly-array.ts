// ReadonlyArray
type Article = { title: string; page: number };
type Art2 = Readonly<Article>;

type Articles = Array<Article>;
type Articles2 = ReadonlyArray<Art2>;

const articles: Articles = [
  { title: 'Статья 1', page: 1 },
  { title: 'Статья 2', page: 2 }
]

articles.push({ title: 'Статья 3', page: 3 })

// кортеж
const articles2: Articles2 = [
  { title: 'Статья 1', page: 1 },
  { title: 'Статья 2', page: 2 }
];

// articles2.push({ title: 'Статья 3', page: 3}) !!!error