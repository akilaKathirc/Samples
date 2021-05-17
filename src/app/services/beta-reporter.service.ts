import { Injectable } from '@angular/core';
import { Reporter } from '../interface/reporter';

@Injectable({
  providedIn: 'root',
})
export class BetaReporterService implements Reporter {
  public message: string = 'Hiii Akila....I\'m Beta';

  constructor() { }
  report(): void {
    // console.log('Injection token for BetaService ');
  }
}
