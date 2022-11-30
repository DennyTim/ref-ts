//Required

type Animal = { name?: string, weight?: number };
type Animal2 = Required<Animal>;

// your own util
type MyRequired<T> = { [P in keyof T]-?: T[P] } // меняем необязательное поле на обязательное
type Animal3 = MyRequired<Animal>;

