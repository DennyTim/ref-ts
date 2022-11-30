type Person11 = { name: string; age: number; weight: number; height: number };

// удаление ключей
type Person22 = Omit<Person11, 'weight' | 'heigth'>;

// your own
type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
type Person33 = MyOmit<Person11, 'weight' | 'heigth'>;