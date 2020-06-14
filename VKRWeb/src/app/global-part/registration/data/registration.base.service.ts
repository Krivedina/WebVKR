import { Injectable } from "@angular/core";
import { HttpService } from '../../http/http.service';
import { AuthenticationBaseService } from '../../authentication/data/authentication.base.service';
import { WrapperMainBaseService } from '../../wrapper-main/data/wrapper-main.base.service';
import { RequestPathList } from '../../http/routing-path-list';

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
          this.showSuccsess("Регистрация успешна!");
        },
        (error) => {
          this.showFail("Ошибка при регистрации пользователя")
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
