import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interfaace';
import { v4 as uuid } from 'uuid';



@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[]  = [{
    id: uuid(),
    name: 'Krilin',
    power:1000,
   },{
    id: uuid(),
    name:'Goku',
    power: 10000,
   },{
    id: uuid(),
    name: 'Vegeta',
    power: 100000
   }

  ]
   ;


   addCharacter(character: Character):void{

    /*
    * toma todos los datos de character e ingestalos en este nuevo objeto
    */
    const newCharacter: Character = { id: uuid(),  ...character};

    this.characters.push(newCharacter);
   }

  //  onDeleteCharacter(index: number){
  //     this.characters.splice(index,1);
  //  }

   deleteCharacterById(id: string): void {
      this.characters =this.characters.filter( character => character.id !== id);
   }
}
