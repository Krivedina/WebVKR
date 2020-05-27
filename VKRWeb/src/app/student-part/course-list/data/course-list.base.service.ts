import { Injectable } from "@angular/core";
import { HttpService } from 'src/app/global-part/http/http.service';
import { RequestPathList } from 'src/app/global-part/http/routing-path-list';

@Injectable()
export class CourseListService {
  constructor(private httpService: HttpService) {}

  public getCourseList() {
    return this.httpService.getRequest(RequestPathList.courseList, "courseList")
  }
}
