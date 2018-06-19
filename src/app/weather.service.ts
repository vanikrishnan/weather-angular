import {Isummary} from './models/summary';
import {Itile} from './models/daytile';
import {Itemp} from './models/temperature';

import {Itpwdet} from './models/tpw';


import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import * as moment from 'moment';
import * as _ from 'lodash';
@Injectable()
export class WeatherService {
dayWiseMap : any;
summary:Isummary;
tempinfo : Itemp;
tpwinfo : Itpwdet;
dayTileList: Array<Itile>;
  constructor(private httpService : Http) {
    this.dayWiseMap={};
   }
   updateDayInfoFor(dayNum: number) {
    // Get the day
    // Lookup in the day wise map for the dayNum
    // Update summary
    const dayInfoForDay = this.dayWiseMap[dayNum];
    console.log(dayInfoForDay);
    this.summary = {
      ...this.summary,
      day: moment(dayInfoForDay[0].dt * 1000).format("dddd"),
      weatherdesc: dayInfoForDay[0].weather[0].description
    }

    this.tpwinfo= {
      temp:dayInfoForDay[0].main.temp ,
      pres: dayInfoForDay[0].main.pressure,
      wind:dayInfoForDay[0].wind.speed
    }

    this.tempinfo= {
      imgurl:'assets/images/partly_cloudy.png',
      tempincel:dayInfoForDay[0].main.temp
    }

  }





fetchWeatherInfo(city :string){
  const url= `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=27d43832d2a4adcb97fcbfa23db130aa`;
  this.httpService.get(url)
    .subscribe((rsp) => {
      console.log(rsp.json());
      const data = rsp.json();
      this.summary = {
        cityName: data.city.name,
        day: moment(data.list[0].dt * 1000).format("dddd"),
        weatherdesc: data.list[0].weather[0].description
      };

      this.tempinfo = {
        imgurl: 'assets/images/partly_cloudy.png',
        tempincel: data.list[0].main.temp
       };

console.log(this.tempinfo);

console.log(this.tempinfo.tempincel);

this.tpwinfo = {
        temp: data.list[0].main.temp,
        pres: data.list[0].main.pressure,
        wind: data.list[0].wind.speed
      };
      console.log(this.tpwinfo);

      console.log(this.tpwinfo.temp);;
      




data.list.forEach(date => {
  // console.log(date);
  const dateValue = new Date(date.dt * 1000);
  const dayNum = dateValue.getDay();
  if (dayNum in this.dayWiseMap) {
    this.dayWiseMap[dayNum].push(date);
  } else {
    this.dayWiseMap[dayNum] = [date];
  }
});
console.log(this.dayWiseMap);

const sortedMap = _.sortBy(this.dayWiseMap, (value) => {
  let dayOfWeek = new Date(value[0].dt * 1000).getDay();
  let today = new Date().getDay();
  const diff = dayOfWeek - today;
  return diff < 0 ? diff + 7 : diff;
});

console.log(sortedMap);

this.dayTileList = _.map(sortedMap, (obj) => {
  const minTemp = _.reduce(obj.map(interval => interval.main.temp_min), (a, b) => a + b) / obj.length;
  return {
    day: moment(obj[0].dt * 1000).format("ddd"),
    mintemp: _.round(minTemp - 270, 2),
    maxtemp: _.round(obj[0].main.temp_max - 270, 2),
    imgurl: 'assets/images/partly_cloudy.png',
    dayNum: new Date(obj[0].dt * 1000).getDay()
  }
});
console.log(this.dayTileList);

});
}
}