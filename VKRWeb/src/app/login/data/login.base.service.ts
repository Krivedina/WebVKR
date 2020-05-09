import { Validators, FormGroup, FormControl } from "@angular/forms";
import { Injectable } from "@angular/core";
import { HttpService } from "src/app/http/http.service";
import { RequestPathList } from 'src/app/http/routing-path-list';

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
      email: new FormControl("krivedina@gmail.com", [Validators.required, Validators.email]),
      password: new FormControl("123456", textValidators)
    });
  }

  public submitData() {
    this.httpService.postRequest(RequestPathList.signIn, this.LoginForm.value, { withCredentials: true });
  }
  
}
