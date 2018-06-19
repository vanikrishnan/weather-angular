import { Component, OnInit,Input } from '@angular/core';
import {Itpwdet} from './../../models/tpw';

@Component({
  selector: 'app-tpw',
  templateUrl: './tpw.component.html',
  styleUrls: ['./tpw.component.css']
})
export class TpwComponent implements OnInit {
@Input() tpwdet :Itpwdet
  constructor() { }

  ngOnInit() {
  }

}
