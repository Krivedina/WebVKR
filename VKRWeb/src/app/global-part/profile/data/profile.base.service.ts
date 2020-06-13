import { Injectable } from "@angular/core";
import { HttpService } from "../../http/http.service";
import { AuthenticationBaseService } from "../../authentication/data/authentication.base.service";
import { RequestPathList } from "../../http/routing-path-list";
import { CacheListName } from "../../http/cashe-name";

@Injectable()
export class ProfileBaseService {
  constructor(
    private httpService: HttpService,
    private authenticationBaseService: AuthenticationBaseService
  ) {}

  public postToInvite() {
    return this.httpService.postRequest(
      "http://localhost:8080/group/acceptInvite?secret=4368adc5-9b65-4352-b057-ee8831a8ea4a",
      null
    );
  }

  public getOpenUser(useCache = true, anotherUserId = null) {
    let userId = anotherUserId
      ? anotherUserId
      : this.authenticationBaseService.getIsAuthenticated().userId;

    return this.httpService.getRequest(
      RequestPathList.openUser + `?userId=${userId}`,
      CacheListName.userProfile,
      useCache
    );
  }

  public postSaveUser(userData) {
    const userId = this.authenticationBaseService.getIsAuthenticated().userId;
    return this.httpService.postRequest(
      RequestPathList.saveUser + `?userId=${userId}`,
      userData
    );
  }

  public postChangePassword(userData) {
    return this.httpService.postRequest(
      RequestPathList.changePassword,
      userData
    );
  }
}
