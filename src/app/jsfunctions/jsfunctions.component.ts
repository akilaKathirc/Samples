import { Component, OnInit } from '@angular/core';
import { CAKE_RECIPE } from '../data/sample1.mock';
import { Batter, TempEnum } from '../interface/batter';
import { Person, User } from '../interface/user';
import { DataService } from '../services/data.service';
import { map, pluck, tap, switchMap, shareReplay, filter } from 'rxjs/operators';

const source = { name: "Akila", age: 40 };
const sourceArr = [{ name: "Akila", age: 40 },
{ name: "Sunitha", age: 20 },
{ name: "Kajol", age: 22 },
{ name: "Mega", age: 32 },
{ name: "Cloudy", age: 26 },
{ name: "Sami", age: 28 },
{ name: "jennifer", age: 21 }];


@Component({
  selector: 'app-jsfunctions',
  templateUrl: './jsfunctions.component.html',
  styleUrls: ['./jsfunctions.component.scss']
})
export class JsfunctionsComponent implements OnInit {
  public batters: Batter[] = [];
  public objectSpread!: Person;
  public arraySpread!: Person[];

  constructor(private dataService: DataService) {
    // this.dataService.GetUser();

  }

  ngOnInit(): void {
  }


  //ARRAY DESTRUCTURING START
  cakeRecipeDestructing() {
    const cakeobj = CAKE_RECIPE[0];
    const { batters: { batter } } = cakeobj;
    // // console.log('double sort :', this.doubleSort((batter as Batter[]), TempEnum.type, TempEnum.id));
  }

  retrievePropValues(obj: any) {
    for (let val in obj) {
      // console.log(`Property name is ${val}    and its value is ${obj[val]}`);
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
  //ARRAY DESTRUCTURING END

  //USERS MANIPULATION START

  public getUsers() {
    // array filter and foreach
    this.dataService.getMessage()
      .pipe(
        switchMap((users: User[]) => {
          console.log(users)
          users.forEach((user) => {
            // user.name = "Mr." + user.name;
            user.email = "akilakathirc@gmail.com";
          });
          const filtr = users.filter((user) => user.id < 5 && user.name === "Leanne Graham");
          return filtr;
        }),
        pluck("address"),
        // shareReplay()
      ).subscribe(
        (usr) => { console.log('Service observable subscription  ', usr) });

    // ===========================================================================================================
    // SORTING


    this.dataService.getMessage().pipe(
      map((users) => {
        return users.sort((user1, user2) => (user1.id > user2.id ? 1 : -1))
      }))
      .subscribe((usr) => console.log('ID  sorted array  :', usr));

    // ===========================================================================================================



    // ARRAY REDUCE


    this.dataService.getMessage().pipe(
      map((users) => {
        return users.reduce((total, user) => total + user.id, 0)
      }))
      .subscribe((usr) => console.log('ID  REduced array  :', usr));

    // ===========================================================================================================

    this.dataService.getMessage().pipe(
      map((users) => {
        return users.findIndex((user, index) => user.name === "Leanne Graham")
      }))
      .subscribe((usr) => console.log(usr));
  }

  public jsSpread() {
    const target = { age: 38 };
    const result = Object.assign(source, target);
    this.objectSpread = Object.assign({ ...source }, { age: 22, furnish: "yes" });


    const targetArr = [{ name: "Fine", age: 40 },
    { name: "Dine", age: 20 },
    { name: "Shine", age: 22 }];
    this.arraySpread = [...sourceArr, ...targetArr, { name: "Newly added", age: 33 }];

  }


  public forIn() {
    for (let value in source) {
      console.log(value);
    }
  }


  public forOf() {
    //will return index(accessing properties)
    for (let value in sourceArr) {
      console.log('for in output with Array', value);
    }

    //will return objects

    for (let value of sourceArr) {
      console.log('for in output with Array', value);
    }
  }
  //USERS MANIPULATION END
}

