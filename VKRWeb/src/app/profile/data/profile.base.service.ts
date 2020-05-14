import { Injectable, OnInit } from "@angular/core";
import { HttpService } from "src/app/http/http.service";
import { RequestPathList } from "src/app/http/routing-path-list";
import { RequestDataName } from "src/app/http/request-data-name";
import { ProfileFormViewModel } from "../view-model/profile-form.view-model";

@Injectable()
//  implements OnInit
export class ProfileBaseService {
  // constructor(private httpService: HttpService) {
  //   // this.httpService.getRequest(RequestPathList.userData, RequestDataName.UserData)
  // }
  // public ngOnInit (){
  //   // const userData = this.httpService.getCacheData(RequestDataName.UserData);
  // }
  // public save(){
  //   // this.httpService.postRequest(RequestPathList.signIn, this.profileForm.value, { withCredentials: true });
  // }
}
