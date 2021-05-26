import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { fromEvent, Observable, of } from 'rxjs';
import { debounceTime, delay, distinctUntilChanged, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomvalidationService {
  public takenUsernames = ['ankit', 'admin', 'user', 'superuser'];
  patternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!control.value) {
        return null;
      }
      const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
      const valid = regex.test(control.value);
      return valid ? null : { invalidPassword: true };
    };
  }

  MatchPassword(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        // return null;
        confirmPasswordControl.setErrors(null);

      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
        // return null;
        confirmPasswordControl.setErrors(null);

      }

      if (confirmPasswordControl.value && passwordControl.value !== confirmPasswordControl.value) {
        passwordControl.setErrors({ passwordMismatch: true });
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }

  userNameValidator(userControl: AbstractControl) {
    return new Promise(resolve => {
      setTimeout(() => {
        const UserList = ['ankit', 'admin', 'user', 'superuser'];
        const result = UserList.indexOf(userControl.value);
        if (result === -1) {
          resolve({ userNameNotAvailable: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }

  checkIfUsernameExists(username: string): Observable<boolean> {
    return of(this.takenUsernames.includes(username));
  }

  usernameValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.checkIfUsernameExists(control.value).pipe(
        map(res => {
          // if res is true, username exists, return true
          return res ? null : { usernameExists: true };
          // NB: Return null if there is no error
        })
      );
    };
  }


}

