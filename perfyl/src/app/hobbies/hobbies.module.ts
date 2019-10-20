import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HobbiesPage } from './hobbies.page';
import { BackbuttonComponent } from '../modules/backbutton/backbutton.component';
import { ModulesModule } from '../modules/modules.module';

const routes: Routes = [
  {
    path: '',
    component: HobbiesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModulesModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HobbiesPage]
})
export class HobbiesPageModule {}
