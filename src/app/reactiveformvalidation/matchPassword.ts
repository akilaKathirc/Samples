import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}



export function isUserNameAvalilable(controlName: string) {
    return (formGroup: FormGroup) => {
        const userControl = formGroup.controls[controlName];
        const UserList = ['ankit', 'admin', 'user', 'superuser', 'akila chengi'];
        if (UserList.indexOf(userControl.value) === -1) {
            userControl.setErrors({ userNameNotAvailable: true })
        }
        else {
            userControl.setErrors(null);
        }
    }
}