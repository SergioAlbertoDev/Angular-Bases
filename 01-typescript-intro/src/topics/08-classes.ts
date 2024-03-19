export class Person{
    // public name: string;

    // private address: string;

    constructor(
        public firstName : string ,
        public lastName: string,
        private address : string = 'WithOut Address'
        )
        { }
}

export class Hero {
    constructor(
        public alterEgo:string,
        public age:number,
        public realName:string,
        public person: Person
    ){
        
    }
}

const person = new Person('Alberto','Correa','Tlalpan')
const yoHero = new Hero('Beto',36,'Sergio',person);

console.log(yoHero);