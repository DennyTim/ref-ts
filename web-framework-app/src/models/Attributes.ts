export class Attributes<T> {
    constructor(private data: T) {
    }

    //принимает ключ К, который является ключем обьекта T
    get = <K extends keyof T>(key: K): T[K] => {
        return this.data[key];
    };

    set = (update: T): void => {
        // в сеттерах нужна иммутабильность
        // @ts-ignore
        Object.assign(this.data, update);
    };

    getAll(): T {
        return this.data;
    }
}
