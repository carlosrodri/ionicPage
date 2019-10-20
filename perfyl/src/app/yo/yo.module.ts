import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ModulesModule} from '../modules/modules.module';

import { IonicModule } from '@ionic/angular';

import { YoPage } from './yo.page';

const routes: Routes = [
  {
    path: '',
    component: YoPage
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
  declarations: [YoPage],
})
export class YoPageModule {}
