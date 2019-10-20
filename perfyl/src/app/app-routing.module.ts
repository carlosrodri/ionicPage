import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BackbuttonComponent } from './modules/backbutton/backbutton.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'yo', loadChildren: './yo/yo.module#YoPageModule' },
  { path: 'skills', loadChildren: './skills/skills.module#SkillsPageModule' },
  { path: 'estudios', loadChildren: './estudios/estudios.module#EstudiosPageModule' },
  { path: 'proyectos', loadChildren: './proyectos/proyectos.module#ProyectosPageModule' },
  { path: 'hobbies', loadChildren: './hobbies/hobbies.module#HobbiesPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
