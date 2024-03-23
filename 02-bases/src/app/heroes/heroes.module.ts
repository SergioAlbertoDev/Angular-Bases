import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list/list.component';
import { NgModule } from "@angular/core";



@NgModule({
    declarations:[
      HeroComponent,
      ListComponent
    ],
    exports:[
      HeroComponent,
      ListComponent
    ],
    imports:[
      CommonModule
    ]
})
export class HeroesModule{}
