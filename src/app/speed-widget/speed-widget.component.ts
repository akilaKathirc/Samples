import { Component, forwardRef, OnInit, ViewEncapsulation } from '@angular/core';
import { Widget } from '../interface/widget';
import { WIDGET } from '../tokens/widget.token';

const WIDGET_PROVIDER = {
  provide: WIDGET,
  useExisting: forwardRef(() => SpeedWidgetComponent)
};

@Component({
  selector: 'app-speed-widget',
  templateUrl: './speed-widget.component.html',
  styleUrls: ['./speed-widget.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [WIDGET_PROVIDER]
})
export class SpeedWidgetComponent implements OnInit, Widget {
  public isLoad: boolean = false;
  public isRefresh: boolean = false;

  constructor() { }

  load() {
    this.isLoad = !this.isLoad;
  }
  refresh() {
    const refre = !this.isRefresh;
    this.isRefresh = refre;
  }

  ngOnInit(): void {
  }


}
