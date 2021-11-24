import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopoLoginComponent } from './topo-login/topo-login.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    TopoLoginComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    TopoLoginComponent
  ]
})
export class ComponentModule { }
