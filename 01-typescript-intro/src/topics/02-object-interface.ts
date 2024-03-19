
const skills: string[] = ['A','B'];

interface Character{
    name:string,
    hp:number,
    skills:string[],
    //hometown:string | undefined;
    hometown?:string;
}

const strider: Character = {
    name: "Strider",
    hp: 100,
    skills: ['A','B']
};

strider.hometown = 'C';

console.table(strider)

export{};