import { Component, OnInit } from "@angular/core";
import { LoginBaseService } from "../data/login.base.service";
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: "login",
  templateUrl: "./login.html",
  styleUrls: ["./login.scss"]
})
export class LoginComponent implements OnInit {

  private _textValidators = [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(25)
  ];
  public loginForm: FormGroup;

  constructor(private loginBaseService: LoginBaseService) {
  }
  public ngOnInit(): void {
    this.loginForm = new FormGroup({
    email: new FormControl("azakov@gmail.com", [Validators.required, Validators.email]),
    password: new FormControl("12345", this._textValidators)
  });
  }

  public login(){
    this.loginBaseService.loginRequest(this.loginForm)
  }
}
  