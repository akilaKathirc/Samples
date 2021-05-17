import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-parent-widget',
  templateUrl: './parent-widget.component.html',
  styleUrls: ['./parent-widget.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ParentWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
