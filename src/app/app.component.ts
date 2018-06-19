import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import {Isummary} from './models/summary';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  SummaryInfo : Isummary;
constructor(public weatherService : WeatherService){

}

  onButtonClick(cityName: string) {
    console.log(cityName);
    this.weatherService.fetchWeatherInfo(cityName);
}
}