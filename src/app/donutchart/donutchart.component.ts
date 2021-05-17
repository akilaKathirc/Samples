import { Component, OnInit } from '@angular/core';
import { SALE_DATA_GROCERY } from '../data/sales.mock';

@Component({
  selector: 'app-donutchart',
  templateUrl: './donutchart.component.html',
  styleUrls: ['./donutchart.component.scss']
})
export class DonutchartComponent implements OnInit {
  public saleData = SALE_DATA_GROCERY;

  constructor() { }

  ngOnInit(): void {
  }

}
