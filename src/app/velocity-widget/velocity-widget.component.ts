import { Component, OnInit } from '@angular/core';
import { Widget } from '../interface/widget';
import { WIDGET } from '../tokens/widget.token';

@Component({
  selector: 'app-velocity-widget',
  templateUrl: './velocity-widget.component.html',
  styleUrls: ['./velocity-widget.component.scss'],
  providers: [{
    provide: WIDGET,
    useExisting: VelocityWidgetComponent
  }]
})
export class VelocityWidgetComponent implements OnInit, Widget {
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
