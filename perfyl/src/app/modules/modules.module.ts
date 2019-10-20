import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbuttonComponent } from './backbutton/backbutton.component';
import { IonicModule } from '@ionic/angular';
import { CardinfoComponent } from './cardinfo/cardinfo.component';
import { CardComponent } from './card/card.component';
import { CardimgComponent } from './cardimg/cardimg.component';

@NgModule({
  declarations: [
    BackbuttonComponent,
    CardinfoComponent,
    CardComponent,
    CardimgComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
   exports :[
     BackbuttonComponent, 
     CardinfoComponent, 
     CardComponent,
     CardimgComponent
    ]
})
export class ModulesModule {
 }
