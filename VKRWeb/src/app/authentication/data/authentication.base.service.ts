import { Injectable } from "@angular/core";
import { HttpService } from "src/app/http/http.service";

@Injectable()
export class AuthenticationBaseService {
  private _userId: string = "";
  private _role: number = -1;
  private _userName: string = "";

  constructor(private httpService: HttpService) {}

  public getIsAuthenticated() {
    return {
      authentication: this._userId,
      role: this._role,
      name: this._userName,
    };
  }

  public checkAuthentication() {
    const localData = localStorage.getItem("userData");
    if (localData) {
      this._userId = localData.split(",")[0];
      this._role = +localData.split(",")[1];
      this._userName = localData.split(",")[2];
    }
  }

  public logIn(loginData) {
    this._userId = loginData.userId;
    this._role = loginData.role;
    this._userName = loginData.fio;
    localStorage.setItem(
      "userData",
      `${loginData.userId},${loginData.role},${loginData.fio}`
    );
    this.httpService.goToUrl("/profile");
  }

  public logOut() {
    localStorage.removeItem("userData");
    this._userId = null;
    this._role = -1;
    this._userName = null;
    this.httpService.goToUrl("/login");
  }
}
