// Record

type Dimmensions1 = { width: number, height: number; length: number };
type Dimmensions2 = Record<'width' | 'height' | 'length', number>;

// your own util
type MyRecord<K extends keyof any, T> = { [P in K]: T };
type Dimmensions3 = MyRecord<'width' | 'height' | 'length', number>;

const dimmensions2: Dimmensions2 = {
  width: 3,
  height: 4,
  length: 5
}