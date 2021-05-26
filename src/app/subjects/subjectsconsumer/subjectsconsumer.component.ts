import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { pairwise } from 'rxjs/operators';
import { Employee } from '../interfaces/employee';
import { MiddlemanService } from '../services/middleman.service';

@Component({
  selector: 'app-subjectsconsumer',
  templateUrl: './subjectsconsumer.component.html',
  styleUrls: ['./subjectsconsumer.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class SubjectsconsumerComponent implements OnInit, OnChanges {
  public empsubject!: Employee;
  public empBehaviourSubject!: Employee;
  public empReplaySubject!: Employee;
  public nameVal!: string;
  public empform: FormGroup;

  constructor(private _middlemanService: MiddlemanService) {
    this.empform = new FormGroup({
      name: new FormControl(''),
      designation: new FormControl(''),
      address: new FormControl(''),
      street: new FormControl(''),
      suite: new FormControl(''),
      city: new FormControl(''),
      zipcode: new FormControl(''),
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.empform.get("name")?.valueChanges
      .subscribe((val) => {
        this.nameVal = val;
        console.log('PREV1', val);
      });
  }

  ngOnInit(): void {
    this.empform.get("name")?.patchValue('Akilandeswari');
    this.empform.get("name")?.valueChanges
      .subscribe((val) => {
        this.nameVal = val;
        console.log('PREV1', val);
      });

    // this._middlemanService.empsubject.subscribe((emp) => {
    //   console.log(emp);
    //   this.empsubject = emp
    // });

    // this._middlemanService.empReplaySubject.subscribe((emp) => {
    //   console.log(emp);
    //   this.empReplaySubject = emp;
    // });

  }

  public onSubmit() {
    console.log('Form submitted value  ', this.empform.value);
  }

}
