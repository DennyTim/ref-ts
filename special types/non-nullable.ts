//NonNullable

type Color1 = string | undefined | null;
type Color2 = NonNullable<Color1>;

// your own util
type MyNonNullable<T> = T extends null | undefined ? never : T;
type Color3 = MyNonNullable<Color1>;