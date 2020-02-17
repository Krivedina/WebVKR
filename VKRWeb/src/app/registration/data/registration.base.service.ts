import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Injectable } from '@angular/core';

@Injectable()
export class RegistrationBaseService {
  public registrationForm: FormGroup;

  constructor() {
    const textValidators = [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(10)
    ];
    this.registrationForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      name: new FormControl("", textValidators),
      surename: new FormControl("", textValidators),
      second_name: new FormControl("", textValidators),
      password: new FormControl("", textValidators),
      password_confirm: new FormControl("", textValidators),
      group: new FormControl("", textValidators)
    });
  }
}
