import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModal2ContentComponent } from '../ngbd-modal2-content/ngbd-modal2-content.component';

@Component({
  selector: 'app-blogen-action',
  templateUrl: './blogen-action.component.html',
  styleUrls: ['./blogen-action.component.scss']

})
export class BlogenActionComponent implements OnInit {

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) { }

  open() {
    this.modalService.open(NgbdModal2ContentComponent, {
      size: 'lg'
    });
  }
  ngOnInit(): void {
  }

}



