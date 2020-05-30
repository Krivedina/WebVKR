import { Injectable } from "@angular/core";
import { HttpService } from "src/app/global-part/http/http.service";
import { RequestPathList } from "src/app/global-part/http/routing-path-list";
import { CacheListName } from "src/app/global-part/http/cashe-name";

@Injectable()
export class TaskBaseService {
  constructor(private httpService: HttpService) {}

  public getTask(taskId) {
    return this.httpService.getRequest(
      RequestPathList.getTask + `?id=${taskId}`,
      CacheListName.task + `${taskId}`
    );
  }
}
