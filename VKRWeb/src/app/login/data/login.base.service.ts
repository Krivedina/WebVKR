import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginBaseService {
    public LoginForm: FormGroup;

    constructor() {
        const textValidators = [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(10)
        ];
        this.LoginForm = new FormGroup({
          email: new FormControl("", [Validators.required, Validators.email]),
          password: new FormControl("", textValidators),
        });
      }
}