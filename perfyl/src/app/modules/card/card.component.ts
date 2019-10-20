import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  tit: string;
  @Input('title') title :string;

  inf: string;
  @Input('info') info :string;

  im: string;
  @Input('img') img :string;
 
  constructor() { 
  }
  ngOnInit() {}

}
