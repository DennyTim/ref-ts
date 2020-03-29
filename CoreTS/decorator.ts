@classDecorator
class Boat {
    @testDecorator
    color: string = 'red';

    @testDecorator
    get formattedColor(): string {
        return `This boats color is ${ this.color }`;
    }

    @logError('Something wrong')
    pilot(
        @parameterDecorator speed: string,
        @parameterDecorator generateWake: boolean
    ): void {
        if (speed === 'fast') {
            console.log('swish');
        } else {
            console.log('nothing');
        }
    }
}

function logError( errorMessage: string ) {
    return function ( target: any, key: string, desc: PropertyDescriptor ) {
        const method = desc.value;

        desc.value = function () {
            try {
                method(); //pilot() or throw new Error();
            } catch (e) {
                console.log(errorMessage);
            }
        }
    }
}

function classDecorator( constructor: typeof Boat ) {
    console.log('classDecorator', constructor);
}

function parameterDecorator( target: any, key: string, index: number ) {
    console.log('parameterDecorator', key, index);
}

function testDecorator( target: any, key: string ) {
    console.log("testDecorator", key);
}

new Boat().pilot('fast', true);
