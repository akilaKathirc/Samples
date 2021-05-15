import { Component, Inject, OnInit } from '@angular/core';
import { Reporter } from '../interface/reporter';
import { REPORTER } from '../tokens/reporter.tokens';

@Component({
  selector: 'app-reporter-consumer',
  templateUrl: './reporter-consumer.component.html',
  styleUrls: ['./reporter-consumer.component.scss']
})
export class ReporterConsumerComponent implements OnInit {

  constructor(@Inject(REPORTER) private reporter: ReadonlyArray<Reporter>) { }

  ngOnInit(): void {
    this.reporter.forEach((repor) => {
      console.log(repor.message);
      console.log(repor);
    });
  }

}
