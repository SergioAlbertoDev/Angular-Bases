export class Person{
    // public name: string;

    // private address: string;

    constructor(
        public name : string ,
        private address : string = 'WithOut Address'
        )
        { }
}

export class Hero extends Person{
    constructor(
        public alterEgo:string,
        public age:number,
        public realName:string,
    ){
        

        super(realName,'Tlalpan');
    }
}

const yoHero = new Hero('Beto',36,'Sergio');

console.log(yoHero);