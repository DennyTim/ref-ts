function fn2(a: string, b: number): boolean {
  return a.length > b.toString().length;
}

class Class2 {
  a: boolean;
  b: string;

  constructor(a: boolean, b: string) {
    this.a = a;
    this.b = b;
  }
}

type H = typeof fn2;
type L = typeof Class2;

type G = ReturnType<H>;
type S = InstanceType<L>;

//your own fn
type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer P ? P : any;
type I = MyReturnType<H>;

//your own class
type MyInstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer P ? P : any;
type Q = MyInstanceType<L>;