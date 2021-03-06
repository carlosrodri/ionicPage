import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SkillsPage } from './skills.page';
import { ModulesModule } from '../modules/modules.module'

const routes: Routes = [
  {
    path: '',
    component: SkillsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModulesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SkillsPage]
})
export class SkillsPageModule {}
