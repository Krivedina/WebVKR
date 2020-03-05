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
      Validators.maxLength(25)
    ];
    this.LoginForm = new FormGroup({
      email: new FormControl("azakov31@gmail.com", [Validators.required, Validators.email]),
      password: new FormControl("qwerty321", textValidators)
    });
  }

  public submitData() {
    const data = this.LoginForm.value;
    console.log(data);
    this.httpService.signIn(data);
  }
  
}
