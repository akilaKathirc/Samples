import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { Employee } from '../interfaces/employee';
import { EMPLOYEE, EMPLOYEE_BEHAVIOUR, EMPLOYEE_REPLAY } from '../mocks/employee';

@Injectable()
export class MiddlemanService {
  public empsubject = new Subject<Employee>();
  public empBehaviourSubject = new BehaviorSubject<Employee>(EMPLOYEE_BEHAVIOUR);
  public empReplaySubject = new ReplaySubject<Employee>(4);

  constructor() { }

  public setSubject(employee: Employee) {
    this.empsubject.next(employee);
  }

  public setBehaviourSubject(employee: Employee) {
    this.empBehaviourSubject.next(employee);
  }

  public setReplaySubject(employee: Employee) {
    this.empReplaySubject.next(employee);
  }

}
