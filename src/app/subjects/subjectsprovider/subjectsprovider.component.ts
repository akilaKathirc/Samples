import { Component, OnInit } from '@angular/core';
import { EMPLOYEE, EMPLOYEE_BEHAVIOUR, EMPLOYEE_REPLAY } from '../mocks/employee';
import { MiddlemanService } from '../services/middleman.service';

@Component({
  selector: 'app-subjectsprovider',
  templateUrl: './subjectsprovider.component.html',
  styleUrls: ['./subjectsprovider.component.scss']
})
export class SubjectsproviderComponent implements OnInit {

  constructor(private _middlemanService: MiddlemanService) { }

  ngOnInit(): void {
  }

  public setSubject() {
    this._middlemanService.setSubject(EMPLOYEE);
  }

  public setBehaviourSubject() {
    this._middlemanService.setBehaviourSubject(EMPLOYEE_BEHAVIOUR);
  }

  public setReplaySubject() {
    this._middlemanService.setReplaySubject(EMPLOYEE_REPLAY);
  }

}
