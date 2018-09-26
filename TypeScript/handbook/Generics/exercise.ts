function identity(arg:type): number {
    return arg;
}

function identityAny(arg:type): any {
    return arg;
}

function identityType<T> (arg: T): T {
    return arg;
}