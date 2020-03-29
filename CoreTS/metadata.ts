import 'reflect-metadata';

/***
 * - декораторы связывают информацию о конфигурации маршрута с методом, используя метаданные
 * - декоратор класса @controller запускается последним
 * - Класс-декоратор считывает метаданные из каждого метода, добавляет полные определения маршрутов в маршрутизатор
 */
@controller
class Plane {
    color: string = 'red';

    @get('HI THERE')
    fly(): void {
        console.log('vrruuuurrr');
    }
}

function get( path: string ) {
    return function ( target: Plane, key: string ) {
        Reflect.defineMetadata('path', path, target, key);
    }
}

function controller( target: typeof Plane ) {
    for (const key in target.prototype) {
        const path = Reflect.getMetadata('secret', target.prototype, key);

        // router.get(path, middleware, target.prototype[key]); // next step
    }
}
