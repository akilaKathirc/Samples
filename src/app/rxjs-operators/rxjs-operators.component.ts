import { Component, OnInit } from '@angular/core';
import { EMPTY, fromEvent, interval, merge, of } from 'rxjs';
import { concatMap, debounceTime, distinctUntilChanged, map, mapTo, mergeMap, pluck, scan, startWith, switchMap, takeWhile, tap } from 'rxjs/operators';



@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.scss']
})
export class RxjsOperatorsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.switchmapExample();
  }

  public onKey(event: any) {
    var input = document.getElementsByTagName('input');
    fromEvent(input, 'input')
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        pluck('target', 'value'))
      .subscribe((val) => console.log(val))
  }

  public switchmapExample() {
    const countdown_seconds = 100;

    //Element Ref
    const resume = document.getElementById("resume") as HTMLElement;
    const pause = document.getElementById("pause") as HTMLElement;
    const result = document.getElementById("result") as HTMLElement;
    var input = document.getElementsByTagName('input');


    //Observables
    const keyEvent$ = fromEvent(input, 'input').pipe(mapTo(true));
    const resume$ = fromEvent(resume, 'click').pipe(mapTo(true));
    const pause$ = fromEvent(pause, 'click').pipe(mapTo(false));
    const interval$ = interval(1000).pipe(mapTo(-10));

    merge(resume$, pause$)
      .pipe(
        startWith(false),
        tap(v => console.log('tapped value   :', v)),
        switchMap((val) => val ? interval$ : EMPTY),
        // mergeMap((val) => val ? interval$ : EMPTY),
        scan((acc, curr) => curr + acc, countdown_seconds),
        takeWhile(v => v >= 0)
      )
      .subscribe((val) => console.log(val));
  }

  public mergemapExample() {
    const first$ = of("Hi...");
    const second$ = of("Learn the use of mergeMap");
    const third$ = of("with this simple example");
    const myPromise = (val: string) => of(`${val} World From Promise!`);

    first$.pipe(
      mergeMap((val) => second$.pipe(
        map((v) => `${val} - ${v}`),
        mergeMap((val1) =>
          third$.pipe(
            map((v) => `${val1} - ${v}`),
            mergeMap((val2) => myPromise(val2))
          ))
      ))
    ).subscribe((c) => console.log(c));
  }

}
