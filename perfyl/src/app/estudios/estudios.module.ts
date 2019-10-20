import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EstudiosPage } from './estudios.page';
import { ModulesModule } from '../modules/modules.module'

const routes: Routes = [
  {
    path: '',
    component: EstudiosPage
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
  declarations: [EstudiosPage]
})
export class EstudiosPageModule {}
