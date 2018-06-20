import { Component, OnInit ,Input} from '@angular/core';
import {Itile} from './../../models/daytile';
import {WeatherService} from './../../weather.service';
@Component({
  selector: 'app-daytile',
  templateUrl: './daytile.component.html',
  styleUrls: ['./daytile.component.css']
})
export class DaytileComponent implements OnInit {
@Input() dayTileInfo:Itile
  constructor(private weatherService : WeatherService) { }

  ngOnInit() {
  }

  onTileClick() {
    this.weatherService.updateDayInfoFor(this.dayTileInfo.dayNum);
  }

}
