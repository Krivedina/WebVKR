import { Injectable } from "@angular/core";
import { HttpService } from 'src/app/global-part/http/http.service';
import { RequestPathList } from 'src/app/global-part/http/routing-path-list';
import { CacheListName } from 'src/app/global-part/http/cashe-name';

@Injectable()
export class StudentListBaseService {

  constructor(private httpService: HttpService) {
  }

  public getGroupList() {
    return this.httpService.getRequest(RequestPathList.groupList, CacheListName.groupList)
  }

  public postAddNewGroup(groupData) {
    return this.httpService.postRequest(RequestPathList.createGroup, groupData)
  }
}
