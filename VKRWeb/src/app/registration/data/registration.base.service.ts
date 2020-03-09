import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/http/http.service';
import { RouteConfigLoadEnd } from '@angular/router';
import { RequestPathList } from 'src/app/http/routing-path-list';

@Injectable()
export class RegistrationBaseService {
  public registrationForm: FormGroup;

  constructor(private httpService: HttpService) {
    const textValidators = [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(10)
    ];
    this.registrationForm = new FormGroup({
      email: new FormControl("azakov31@gmail.com", [Validators.required, Validators.email]),
      firstName: new FormControl("Иван", textValidators),
      surname: new FormControl("Иванович", textValidators),
      secondName: new FormControl("Зарубин", textValidators),
      password: new FormControl("12345", textValidators),
      passwordConfirm: new FormControl("12345", textValidators),
      group: new FormControl("КН-402", textValidators)
    });
    
  }

  public registrationRequest() {
    const data = this.registrationForm.value;
  //f1831740-a461-4223-a53d-902753eca4a3
    console.log(data);
    this.httpService.postRequest(RequestPathList.signUp, data);
  }
}
