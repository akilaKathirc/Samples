import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-modal2-content',
  templateUrl: './ngbd-modal2-content.component.html',
  styleUrls: ['./ngbd-modal2-content.component.scss']
})
export class NgbdModal2ContentComponent implements OnInit {
  @Input() title: string = "Modal";
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
