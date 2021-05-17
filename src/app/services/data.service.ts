import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { USERS } from '../data/users.mock';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public userSub = new Subject<User[]>();

  constructor() { }

  public GetUser(users: User[]): void {
    this.userSub.next(users);
  }

  getMessage(): Observable<User[]> {
    return this.userSub.asObservable();
  }
}
