import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router) {}

  goPageYo(){
   this.router.navigate(["yo"]);
  }
  skills(){
    this.router.navigate(["skills"]);
   }
   estudios(){
    this.router.navigate(["estudios"]);
   }
   proyectos(){
    this.router.navigate(["proyectos"]);
   }
   hobbies(){
    this.router.navigate(["hobbies"]);
   }
}
