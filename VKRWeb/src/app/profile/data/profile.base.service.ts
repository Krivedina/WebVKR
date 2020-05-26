import { Injectable, OnInit } from "@angular/core";
import { HttpService } from "src/app/http/http.service";
import { RequestPathList } from "src/app/http/routing-path-list";
import { RequestDataName } from "src/app/http/request-data-name";
import { ProfileFormViewModel } from "../view-model/profile-form.view-model";
import { RoleEnum } from "static/role.enum";
import { AuthenticationBaseService } from 'src/app/authentication/data/authentication.base.service';

@Injectable()
export class ProfileBaseService implements OnInit {
  constructor(private httpService: HttpService, private authenticationBaseService: AuthenticationBaseService) {
    // this.httpService.getRequest(RequestPathList.userData, RequestDataName.UserData)
  }
  public ngOnInit() {
    // const userData = this.httpService.getCacheData(RequestDataName.UserData);
  }
  // public save() {
  //   // this.httpService.postRequest(RequestPathList.signIn, this.profileForm.value, { withCredentials: true });
  // }

  public getOpenUser() {
    // this.authenticationBaseService.
    return this.httpService.getRequest(RequestPathList.openUser, "currentUser");
  }
}
