import { BrowserModule } from '@angular/platform-browser';
import { WeatherService } from './weather.service';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
// import { ChartsModule } from 'ng2-charts/ng2-charts';
// import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import { ChartComponent } from './components/chart/chart.component';
import { DaytileComponent } from './components/daytile/daytile.component';
import { TemperatureComponent } from './components/temperature/temperature.component';
import { TpwComponent } from './components/tpw/tpw.component';
import { SummaryComponent } from './components/summary/summary.component';


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    DaytileComponent,
    TemperatureComponent,
    TpwComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Ng2GoogleChartsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
