export function whatsMyType<T>(argument:T) : T {
    return argument;
}

let amIString = whatsMyType<string>('Hola Mundo');
let amINumeric = whatsMyType(100);
let amIArray = whatsMyType<number[]>([1,2,3,4,5]);

console.log(amIString.split(' '));
console.log(amINumeric.toFixed());
console.log(amIArray.join('-'));


