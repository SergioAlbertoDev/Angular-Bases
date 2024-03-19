export class Person{
    // public name: string;

    // private address: string;

    constructor(
        public name : string ,
        private address : string = 'WithOut Address'
        )
        { }
}

const yo = new Person('Sergio');

console.log(yo);
