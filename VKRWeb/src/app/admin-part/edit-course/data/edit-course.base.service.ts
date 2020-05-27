import { Injectable } from "@angular/core";
import { HttpService } from 'src/app/global-part/http/http.service';
import { RequestPathList } from 'src/app/global-part/http/routing-path-list';


@Injectable()
export class EditCourseBaseService {
  constructor(private httpService: HttpService) {}

  public getCourseList(flag = true) {
    return this.httpService.getRequest(RequestPathList.courseList, "courseList", flag);
  }

  public postDeleteCourse(id) {
    return this.httpService.postRequest(RequestPathList.deleteCourse+`?id=${id}`, null);
  }

  public postCreateCourse(data){
    return this.httpService.postRequest(RequestPathList.courseCreate, data);
  }
}