//Partial

type Person1 = { name: string, age: number };
type Person2 = Partial<Person1>;

// your own util
type MyPartial<T> = { [P in keyof T]?: T[P] };
type Person3 = MyPartial<Person1>;