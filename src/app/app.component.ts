import { Component, OnInit } from '@angular/core';
import { constReporter } from './constants/logger';
import { AlphaReporterService } from './services/alpha-reporter.service';
import { BetaReporterService } from './services/beta-reporter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{ provide: AlphaReporterService, useValue: constReporter }]
})
export class AppComponent implements OnInit {
  title = 'Examples';

  constructor(private alpha: AlphaReporterService,
    private beta: BetaReporterService) {
  }

  ngOnInit() {
    console.log('ala ', this.alpha.message);

    console.log(this.beta.message);

    console.log(`is both same ${this.alpha === this.beta} , ${this.alpha.report()} , ${this.beta.report()}`)
  }
}
