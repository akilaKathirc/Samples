import { Component, OnInit } from '@angular/core';
import { SALE_DATA } from '../data/sales.mock';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {
  public saleData = SALE_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
