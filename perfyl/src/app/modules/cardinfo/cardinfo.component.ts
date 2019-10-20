import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-cardinfo',
  templateUrl: './cardinfo.component.html',
  styleUrls: ['./cardinfo.component.scss'],
})
export class CardinfoComponent implements OnInit {

  tit: string;
  @Input('title') title :string;

  inf: string;
  @Input('info') info :string;
  constructor() { 
  }

  ngOnInit() {}

}
