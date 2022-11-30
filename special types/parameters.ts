function fn1(a: string, b: number): boolean {
  return a.length > b.toString().length;
}

class Class1 {
  a: boolean;
  b: string;

  constructor(a: boolean, b: string) {
    this.a = a;
    this.b = b;
  }
}

type CustomA = typeof fn1;
type CustomB = typeof Class1;

// кортеж из типов указанных в параметрах функции
type J = Parameters<CustomA>;

// your own

// infer -> тип который существует в типе P
type MyParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
type O = MyParameters<CustomA>;

// кортеж из типов указанных в параметрах конструктора
type E = ConstructorParameters<CustomB>;

// your own
type MyConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;
type F = MyConstructorParameters<CustomB>;