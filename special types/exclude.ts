type G = string | number | boolean;
type Z = string | number;

// исключает общие типы
type E = Exclude<G, Z>;

// your own
type MyExclude<T, U> = T extends U ? never : T;
type F = MyExclude<G, Z>;