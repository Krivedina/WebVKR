import { Validators, FormGroup, FormControl } from "@angular/forms";
import { Injectable } from "@angular/core";
import { HttpService } from "src/app/http/http.service";

@Injectable()
export class LoginBaseService {
  public LoginForm: FormGroup;

  constructor(private httpService: HttpService) {
    const textValidators = [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(10)
    ];
    this.LoginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", textValidators)
    });
  }

  public submitData() {
    const data = {
      email: "qwerty@lul.cum",
      password: "aza"
    };
    this.httpService.signIn(data);
  }
  
}
