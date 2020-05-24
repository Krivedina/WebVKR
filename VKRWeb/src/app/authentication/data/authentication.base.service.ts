import { Injectable } from "@angular/core";
import { HttpService } from "src/app/http/http.service";
import { RoleEnum } from "../../../../static/role.enum";

@Injectable()
export class AuthenticationBaseService {
  private _isAuth: boolean = false;
  private _role: number = -1;

  constructor(private httpService: HttpService) {}

  public getIsAuthenticated() {
    return { authentication: this._isAuth, role: this._role };
  }

  public logIn() {
    this._isAuth = true;
    this._role = RoleEnum.admin;
    this.httpService.goToUrl("/");
  }

  public logOut() {
    this._isAuth = false;
    this._role = RoleEnum.offline;
    this.httpService.goToUrl("/login");
  }
}
