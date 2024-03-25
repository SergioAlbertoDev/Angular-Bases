import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interfaace';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[]  = [{
    name: 'Krilin',
    power:1000,
   },{
    name:'Goku',
    power: 10000,
   },{
    name: 'Vegeta',
    power: 100000
   }

  ]
   ;


   onNewCharacter(character: Character):void{
    this.characters.push(character);
   }

   onDeleteCharacter(index: number){
      this.characters.splice(index,1);
   }
}
