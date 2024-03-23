import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.componen";


@NgModule({
      declarations:[
        CounterComponent
      ],
      exports: [
        CounterComponent
      ]
})
export class CounterModule{}
