import { Injectable } from "@angular/core";
import { HttpService } from "src/app/http/http.service";
import { RequestPathList } from "src/app/http/routing-path-list";
import { AuthenticationBaseService } from "src/app/authentication/data/authentication.base.service";
import { WrapperMainBaseService } from "src/app/wrapper-main/wrapper-main.base.service";

@Injectable()
export class RegistrationBaseService {
  constructor(
    private httpService: HttpService,
    private authenticationBaseService: AuthenticationBaseService,
    private wrapperMainBaseService: WrapperMainBaseService
  ) {}

  public registrationRequest(registrationForm) {
    this.httpService
      .postRequest(RequestPathList.signUp, registrationForm)
      .subscribe(
        (registrationData) => {
          console.log(registrationData);
          this.authenticationBaseService.logIn(registrationData);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  public showSuccsess(string) {
    this.wrapperMainBaseService.showMessage(string, true);
  }

  public showFail(string) {
    this.wrapperMainBaseService.showMessage(string, false);
  }
}
