import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProyectosPage } from './proyectos.page';
import { ModulesModule } from '../modules/modules.module';

const routes: Routes = [
  {
    path: '',
    component: ProyectosPage
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
  declarations: [ProyectosPage]
})
export class ProyectosPageModule {}
