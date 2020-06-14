import { Injectable } from "@angular/core";
import { HttpService } from "src/app/global-part/http/http.service";
import { RequestPathList } from "src/app/global-part/http/routing-path-list";
import { CacheListName } from "src/app/global-part/http/cashe-name";

@Injectable()
export class CheckTaskBaseService {
  constructor(private httpService: HttpService) {}

  public postRateTask(taskData, studentId) {
    return this.httpService.postRequest(
      RequestPathList.markTask + `?studentId=${studentId}`,
      taskData
    );
  }

  public getTask(taskId, userId) {
    return this.httpService.getRequest(
      RequestPathList.getTask + `?taskId=${taskId}` + `&userId=${userId}`,
      CacheListName.rateTask + `${taskId}`,
      false
    );
  }
}
