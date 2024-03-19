export class Person{
    public name: string;

    private address: string;

    constructor(){
        this.name = 'Sergio';
        this.address = 'Ecatepec';
    }
}

const yo = new Person();

console.log(yo);
