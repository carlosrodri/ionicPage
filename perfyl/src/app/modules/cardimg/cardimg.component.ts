import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cardimg',
  templateUrl: './cardimg.component.html',
  styleUrls: ['./cardimg.component.scss'],
})
export class CardimgComponent implements OnInit {


  tit: string;
  @Input('title') title :string;

  inf: string;
  @Input('info') info :string;

  im: string;
  @Input('img') img :string;

  constructor() { }

  ngOnInit() {}

}
