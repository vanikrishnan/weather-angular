import { Component, OnInit,Input } from '@angular/core';
import {Isummary} from './../../models/summary';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
@Input() summaryInfo : Isummary
  constructor() { }

  ngOnInit() {
  }

}
