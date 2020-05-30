import { Injectable } from "@angular/core";
import { HttpService } from "../../http/http.service";
import { AuthenticationBaseService } from "../../authentication/data/authentication.base.service";
import { WrapperMainBaseService } from "../../wrapper-main/data/wrapper-main.base.service";
import { RequestPathList } from "../../http/routing-path-list";

@Injectable()
export class LoginBaseService {
  constructor(
    private httpService: HttpService,
    private authenticationBaseService: AuthenticationBaseService,
    private wrapperMainBaseService: WrapperMainBaseService
  ) {}

  public loginRequest(loginForm) {
    this.httpService
      .postRequest(RequestPathList.signIn, loginForm.value)
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
