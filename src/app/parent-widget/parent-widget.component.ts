import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { USERS } from '../data/users.mock';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-parent-widget',
  templateUrl: './parent-widget.component.html',
  styleUrls: ['./parent-widget.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ParentWidgetComponent implements OnInit {

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.GetUser(USERS);
  }

}
