export interface Passenger{
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name:'Sergio',
}

const passenger2: Passenger = {
    name: 'Janet',
    children: ['Boris','Pelusa'],
}

const returnChilderNumber = (passenger: Passenger): number => 
{

    //const howManyChildren = passenger.children?.length || 0;
    const howManyChildren = passenger.children!.length;
    
    console.log(passenger1, howManyChildren);
    
    return howManyChildren;
}

returnChilderNumber(passenger2);

