import { Injectable } from "@angular/core";
import { HttpService } from "src/app/http/http.service";
import { RequestPathList } from "src/app/http/routing-path-list";
import { AuthenticationBaseService } from "src/app/authentication/data/authentication.base.service";
import { WrapperMainBaseService } from "src/app/wrapper-main/wrapper-main.base.service";

@Injectable()
export class LoginBaseService {
  constructor(
    private httpService: HttpService,
    private authenticationBaseService: AuthenticationBaseService,
    private wrapperMainBaseService: WrapperMainBaseService
  ) {}

  public loginRequest(loginForm) {
    this.httpService
      .postRequest(RequestPathList.signIn, loginForm.value, {
        withCredentials: true,
      })
      .subscribe(
        (loginData) => {
          console.log(loginData);
          this.authenticationBaseService.logIn(loginData);
        },
        (error) => {
          this.wrapperMainBaseService.showMessage(
            "Неправильный логин или пароль",
            false
          );
        }
      );
  }
}
