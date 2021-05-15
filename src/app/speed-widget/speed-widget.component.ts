import { Component, OnInit } from '@angular/core';
import { Widget } from '../interface/widget';
import { WIDGET } from '../tokens/widget.token';

@Component({
  selector: 'app-speed-widget',
  templateUrl: './speed-widget.component.html',
  styleUrls: ['./speed-widget.component.scss'],
  providers: [{
    provide: WIDGET,
    useExisting: SpeedWidgetComponent
  }]
})
export class SpeedWidgetComponent implements OnInit, Widget {
  public isLoad: boolean = false;
  public isRefresh: boolean = false;


  constructor() { }
  load() {
    this.isLoad = !this.isLoad;
  }
  refresh() {
    this.isRefresh = !this.isRefresh;
  }

  ngOnInit(): void {
  }


}
