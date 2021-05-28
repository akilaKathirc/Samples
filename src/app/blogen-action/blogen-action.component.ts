import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BlogenAddActionComponent } from '../blogen-add-action/blogen-add-action.component';
import { BlogenAddCategoryComponent } from '../blogen-add-category/blogen-add-category.component';
import { BlogenAddUsersComponent } from '../blogen-add-users/blogen-add-users.component';
import { ModalService } from '../services/modal.service';
import { Actiontype } from '../shared/enums/actionType';


@Component({
  selector: 'app-blogen-action',
  templateUrl: './blogen-action.component.html',
  styleUrls: ['./blogen-action.component.scss']

})
export class BlogenActionComponent implements OnInit {
  constructor(private modalService: ModalService, public activeModal: NgbActiveModal) { }

  public get connectionResult(): typeof Actiontype {
    return Actiontype;
  }

  open(type: string) {
    if (type === this.connectionResult.action) {
      this.modalService.open(BlogenAddActionComponent);
    }
    else if (type === this.connectionResult.category) {
      this.modalService.open(BlogenAddCategoryComponent);
    }
    else if (type === this.connectionResult.user) {
      this.modalService.open(BlogenAddUsersComponent);
    }
  }

  ngOnInit(): void {
  }

}



