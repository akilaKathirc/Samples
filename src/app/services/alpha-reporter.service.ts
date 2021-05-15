import { Injectable } from '@angular/core';
import { Reporter } from '../interface/reporter';

@Injectable({
  providedIn: 'root',
})
export class AlphaReporterService implements Reporter {
  public message: string = 'Hiii Akila....I\'m Alpha';
  constructor() { }
  report(): void {
    console.log('Token for Alpha service');
  }
}
