import { Component, OnInit } from "@angular/core";
import { RegistrationBaseService } from "../data/registration.base.service";
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: "registration",
  templateUrl: "./registration.html",
  styleUrls: ["./registration.scss"]
})
export class RegistrationComponent implements OnInit {
  public registrationForm: FormGroup;
  public textValidators = [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(10)
  ];

  constructor(private registrationBaseService: RegistrationBaseService){

  }

  public ngOnInit(){
    this.registrationForm = new FormGroup({
      email: new FormControl("azakov31@gmail.com", [
        Validators.required,
        Validators.email
      ]),
      firstName: new FormControl("Иван", this.textValidators),
      surname: new FormControl("Иванович", this.textValidators),
      secondName: new FormControl("Зарубин", this.textValidators),
      password: new FormControl("12345", this.textValidators),
      passwordConfirm: new FormControl("12345", this.textValidators),
      group: new FormControl("КН-402", this.textValidators),
      student: new FormControl(''),
      admin: new FormControl(''),
    });
  }

  public registation(){
    this.registrationBaseService.registrationRequest(this.registrationForm)
  }
}
