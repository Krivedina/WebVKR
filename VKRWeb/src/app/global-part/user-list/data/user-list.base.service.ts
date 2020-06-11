import { Injectable } from "@angular/core";
import { HttpService } from "../../http/http.service";
import { RequestPathList } from '../../http/routing-path-list';
import { CacheListName } from '../../http/cashe-name';

@Injectable()
export class UserListBaseService {
  constructor(private httpService: HttpService) {}
  public getStudentList() {
    //   return this.httpService.getRequest(RequestPathList.userList, CacheListName.userList)
  }
}
