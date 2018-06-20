import { Component, OnInit,Input,OnChanges } from '@angular/core';
import {IChart} from './../../models/chart';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() chartData;
  pieChartData: any;
  

  ngOnInit() {
    console.log(this.chartData);
    console.log("chart")
    this.pieChartData = {
      chartType: 'LineChart',
      dataTable: [['Time', 'Temperature'],...this.chartData],
  }
  }
}
