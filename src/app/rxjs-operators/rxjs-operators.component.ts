import { Component, OnInit } from '@angular/core';
import { combineLatest, concat, EMPTY, fromEvent, interval, merge, of, timer } from 'rxjs';
import { combineAll, concatMap, debounceTime, distinctUntilChanged, map, mapTo, mergeMap, pluck, scan, startWith, switchMap, take, takeWhile, tap } from 'rxjs/operators';



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

  public combineAllEx() {
    const first$ = interval(100).pipe(take(2));
    const second$ = first$.pipe(
      map((val) =>
        interval(200).pipe(
          map((val1) => `First observable output :${val} , Second observable output :${val1} `),
          take(5),
        )));

    const combinedOutput = second$.pipe(combineAll());
    combinedOutput.subscribe((op) => console.log(op));
  }

  public combineLatestEx() {
    const timer1$ = timer(1000, 1010).pipe(take(2));
    const timer2$ = timer(2000, 2010).pipe(take(2));
    const timer3$ = timer(3000, 3010).pipe(take(2));

    combineLatest(timer1$, timer2$, timer3$)
      .subscribe(([val1, val2, val3]) => {
        console.log(`Timer one value : ${val1},
      Timer two value : ${val2},
      Timer three value : ${val3},`)
      })


  }

  public combineLatestEx1() {
    const redLabel = document.getElementById("red-count");
    const blueLabel = document.getElementById("blue-count");
    const totalLabel = document.getElementById("total");

    const addClickListener = (id: string) =>
      fromEvent(<HTMLElement>document.getElementById(id), 'click').pipe(
        mapTo(1),
        scan((acc, curr) => acc + curr, 0),
        startWith(0)
      );

    combineLatest(addClickListener('red'), addClickListener('blue'))
      .subscribe(([red, blue]: any) => {
        (<HTMLElement>redLabel).innerHTML = red;
        (<HTMLElement>blueLabel).innerHTML = blue;
        (<HTMLElement>totalLabel).innerHTML = red + blue;

      })

  }

  public concatEx() {
    concat(of(1, 2, 3), of(4, 5, 6), of(7, 8, 9)).subscribe(console.log);
  }
}
