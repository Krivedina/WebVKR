import { Injectable } from "@angular/core";
import { HttpService } from "src/app/global-part/http/http.service";
import { RequestPathList } from "src/app/global-part/http/routing-path-list";
import { CacheListName } from "src/app/global-part/http/cashe-name";
import { AuthenticationBaseService } from "src/app/global-part/authentication/data/authentication.base.service";

@Injectable()
export class EditTaskBaseService {
  constructor(
    private httpService: HttpService,
    private authenticationBaseService: AuthenticationBaseService
  ) {}

  public getTask(taskId, flag = true) {
    const userId = this.authenticationBaseService.getIsAuthenticated().userId;
    return this.httpService.getRequest(
      RequestPathList.getTask + `?taskId=${taskId} + &userId=${userId}`,
      CacheListName.task + `${taskId}`,
      flag
    );
  }

  public postSaveTask(taskData) {
    return this.httpService.postRequest(
      RequestPathList.editTask ,
      taskData
    );
  }
}
