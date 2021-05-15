import { Component, ContentChild, OnInit } from '@angular/core';
import { Widget } from '../interface/widget';
import { WIDGET } from '../tokens/widget.token';

@Component({
  selector: 'app-wrapper-widget',
  templateUrl: './wrapper-widget.component.html',
  styleUrls: ['./wrapper-widget.component.scss']
})
export class WrapperWidgetComponent implements OnInit {
  @ContentChild(WIDGET, { static: true }) widget!: Widget;
  constructor() { }

  ngOnInit(): void {
  }


  Load() {
    this.widget.load();
  }

  Refresh() {
    this.widget.refresh();
  }
}

