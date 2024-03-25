import { Character } from './../interfaces/character.interfaace';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

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
