import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DashCardComponent } from './dash-card/dash-card.component';



@NgModule({
  declarations: [
    DashCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    DashCardComponent
  ]
})
export class ComponentModule { }
