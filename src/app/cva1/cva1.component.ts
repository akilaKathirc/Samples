import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cva1',
  templateUrl: './cva1.component.html',
  styleUrls: ['./cva1.component.scss']
})
export class CVA1Component implements OnInit {
  public CVA_Form: FormGroup;
  constructor() {
    this.CVA_Form = new FormGroup({
      name: new FormControl(),
      isLocked: new FormControl(false)
    })
  }

  ngOnInit(): void {
  }

  SubmitForm() {
    // console.log(this.CVA_Form.value)
  }
}
