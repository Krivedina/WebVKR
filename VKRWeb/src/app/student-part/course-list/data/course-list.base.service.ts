import { Injectable } from "@angular/core";
import { HttpService } from "src/app/global-part/http/http.service";
import { RequestPathList } from "src/app/global-part/http/routing-path-list";
import { CacheListName } from "src/app/global-part/http/cashe-name";
import { AuthenticationBaseService } from "src/app/global-part/authentication/data/authentication.base.service";

@Injectable()
export class CourseListService {
  constructor(
    private httpService: HttpService,
    private authenticationBaseService: AuthenticationBaseService
  ) {}

  public getCourseList() {
    const userId = this.authenticationBaseService.getIsAuthenticated().userId;
    return this.httpService.getRequest(
      RequestPathList.courseList + `?userId=${userId}`,
      CacheListName.courseList,
      false
    );
  }
}
