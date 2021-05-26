import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { isUserNameAvalilable } from '../reactiveformvalidation/matchPassword';
import { CustomvalidationService } from '../services/customvalidation.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  public empform: FormGroup;
  public nameVal!: string;
  public submitted: boolean = false;

  constructor(private customValidator: CustomvalidationService,
    private fb: FormBuilder) {
    this.empform = this.fb.group({
      name: new FormControl('', [Validators.required]),
      designation: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required,
      ]
      ),
      password: new FormControl('', Validators.compose([Validators.required,
      this.customValidator.patternValidator()])),
      confirmPassword: new FormControl('', [Validators.required]),
      address: new FormGroup({
        street: new FormControl('', [Validators.required]),
        suite: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        zipcode: new FormControl('', [Validators.required])
      })
    },
      {
        validators: [this.customValidator.MatchPassword('password', 'confirmPassword'),
        isUserNameAvalilable('username')]
      },
    );
  }

  ngOnInit(): void {
    // this.empform.get("name")?.valueChanges
    //   .subscribe((val) => {
    //     this.empform.get('name')?.patchValue('Akilandeswari')
    //   });

    this.empform.get("designation")?.valueChanges
      .subscribe((val) => {
        console.log(this.empform);
      });

    // this.empform.get("name")?.setValue("On NgInit")
  }

  public onSubmit() {
    this.submitted = true;

    console.log('Form submitted value  ', this.empform.value);
  }

  setValue() {
    let contact = {
      name: "Rahul",
      designation: "Dravid",
      email: 'ak@gmail.com',
      username: 'admin',
      password: 'Akila1983$',
      confirmPassword: 'Akila1983#',
      address: {
        city: "Bangalore",
        street: "Brigade Road",
        zipcode: "600070",
        suite: "Royal Suite"
      }
    };

    this.empform.setValue(contact);
  }

  setAddress() {

    this.empform.get("address")?.setValue(
      {
        city: "Delhi",
        street: "Chandini Chowk",
        zipcode: "600070",
        suite: "Royal Suite"
      }
    );
  }

  setFirstname() {
    this.empform.get("name")?.setValue("Saurav")
  }

  withoutOnlySelf() {
    this.empform.get("name")?.setValue("");
  }
  withOnlySelf() {
    this.empform.get("name")?.setValue("", { onlySelf: true });
  }

  withEmitEvent() {
    this.empform.get("name")?.setValue("Sachin");
  }
  withoutEmitEvent() {
    this.empform.get("name")?.setValue("", { emitEvent: false });
  }

  reset() {
    this.empform.reset();
  }
}
