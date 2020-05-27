import { Injectable } from '@angular/core';
import { HttpService } from '../../http/http.service';
import { AuthenticationBaseService } from '../../authentication/data/authentication.base.service';
import { RequestPathList } from '../../http/routing-path-list';


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
