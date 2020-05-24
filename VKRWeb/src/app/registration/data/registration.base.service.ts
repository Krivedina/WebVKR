import { Injectable } from "@angular/core";
import { HttpService } from "src/app/http/http.service";
import { RequestPathList } from "src/app/http/routing-path-list";
import { AuthenticationBaseService } from "src/app/authentication/data/authentication.base.service";

@Injectable()
export class RegistrationBaseService {
  constructor(
    private httpService: HttpService,
    private authenticationBaseService: AuthenticationBaseService
  ) {}

  public registrationRequest(registrationForm) {
    const data = registrationForm.value;
    //f1831740-a461-4223-a53d-902753eca4a3
    console.log(data);
    this.httpService.postRequest(RequestPathList.signUp, data).subscribe(
      (registrationData) => {
        console.log(registrationData);
        this.authenticationBaseService.logIn();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
