import { Injectable } from "@angular/core";
import { HttpService } from "src/app/http/http.service";
import { RequestPathList } from "src/app/http/routing-path-list";
import { of } from 'rxjs';

@Injectable()
export class CourseListService {
  constructor(private httpService: HttpService) {}

  public getCourseList() {
    return this.httpService.getRequest(RequestPathList.courseList, "courseList")
  }
}
