//Readonly

type Article1 = { title: string; page: number };
type Article2 = Readonly<Article1>;

const article1: Article1 = { title: 'Article 1', page: 1 };
article1.title = 'Article 1';

const article2: Article2 = { title: 'Article 2', page: 1 };
//article2.title = 'Article 2';  !!!error

// your own util
type MyReadonly<T> = { readonly [P in keyof T]: T[P] };
type Article3 = MyReadonly<Article1>;

const article3: Article3 = { title: 'Article 2', page: 1 };
//article3.title = 'Article 3';  !!!error
const article4 = { title: 'Статья 4', page: 4 } as const;