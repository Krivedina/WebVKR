import { Injectable, OnInit } from "@angular/core";
import { HttpService } from "src/app/http/http.service";
import { RequestPathList } from "src/app/http/routing-path-list";
import { RequestDataName } from "src/app/http/request-data-name";
import { ProfileFormViewModel } from "../view-model/profile-form.view-model";
import { RoleEnum } from "static/role.enum";
import { AuthenticationBaseService } from 'src/app/authentication/data/authentication.base.service';

@Injectable()
export class ProfileBaseService {
  constructor(private httpService: HttpService, private authenticationBaseService: AuthenticationBaseService) {
  }

  // public save() {
  //   // this.httpService.postRequest(RequestPathList.signIn, this.profileForm.value, { withCredentials: true });
  // }

  public getOpenUser() {
    const userId = this.authenticationBaseService.getIsAuthenticated().authentication
    return this.httpService.getRequest(RequestPathList.openUser + `?userId=${userId}`, "currentUser");
  }
}
