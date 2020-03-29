export function autobind(
        _target: any,
        _method: string,
        descriptor: PropertyDescriptor
): PropertyDescriptor {
    return {
        configurable: true,
        get() {
            return descriptor.value.bind(this);
        }
    };
}


