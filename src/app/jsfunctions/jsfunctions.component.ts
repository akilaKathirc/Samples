import { Component, OnInit } from '@angular/core';
import { CAKE_RECIPE } from '../data/sample1.mock';
import { Batter, TempEnum } from '../interface/batter';

@Component({
  selector: 'app-jsfunctions',
  templateUrl: './jsfunctions.component.html',
  styleUrls: ['./jsfunctions.component.scss']
})
export class JsfunctionsComponent implements OnInit {
  public batters: Batter[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  cakeRecipeDestructing() {
    const cakeobj = CAKE_RECIPE[0];
    const { batters: { batter } } = cakeobj;
    console.log('double sort :', this.doubleSort((batter as Batter[]), TempEnum.type, TempEnum.id));
  }

  retrievePropValues(obj: any) {
    for (let val in obj) {
      console.log(`Property name is ${val}    and its value is ${obj[val]}`);
    }
  }

  doubleSort(arr: Array<Batter>, prop1: TempEnum.type, prop2: TempEnum.id) {
    return [...arr].sort((a, b) => {
      if (a[prop1].localeCompare(b[prop1]) === 0) {
        if (a[prop2].localeCompare(b[prop2]) === 0) {
          return 0;
        }
        else
          return a[prop1].localeCompare(b[prop1]) < 0 ? -1 : 1;
      }
      else
        return a[prop1].localeCompare(b[prop1]) < 0 ? -1 : 1;
    });
  }

}
