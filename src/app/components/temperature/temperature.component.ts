import { Component, OnInit ,Input} from '@angular/core';
import {Itemp} from './../../models/temperature';
@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {
@Input() tempInfo: Itemp
  constructor() { }

  ngOnInit() {
  }

}
