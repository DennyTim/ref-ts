type A = string | number | boolean;
type B = string | number;

// берет только общие типы
type C = Extract<A, B>;

// your own

type MyExtract<T, U> = T extends U ? T : never;
type D = MyExtract<A, B>;