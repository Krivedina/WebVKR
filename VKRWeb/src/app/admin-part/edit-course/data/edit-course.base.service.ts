import { Injectable } from "@angular/core";
import { HttpService } from "src/app/global-part/http/http.service";
import { RequestPathList } from "src/app/global-part/http/routing-path-list";
import { CacheListName } from "src/app/global-part/http/cashe-name";

@Injectable()
export class EditCourseBaseService {
  constructor(private httpService: HttpService) {}

  public getCourseList(flag = true) {
    return this.httpService.getRequest(
      RequestPathList.courseList,
      CacheListName.courseList,
      flag
    );
  }

  public postDeleteCourse(courseId) {
    return this.httpService.postRequest(
      RequestPathList.deleteCourse + `?id=${courseId}`,
      null
    );
  }

  public postCreateCourse(courseData) {
    return this.httpService.postRequest(
      RequestPathList.courseCreate,
      courseData
    );
  }

  public postAddTask(taskData, courseId) {
    return this.httpService.postRequest(
      RequestPathList.addTask + `?courseId=${courseId}`,
      taskData
    );
  }

  public postEditCourse(courseData, courseId) {
    return this.httpService.postRequest(
      RequestPathList.courseEdit + `?id=${courseId}`,
      courseData
    );
  }

  public postDeleteTask(courseId, taskId) {
    return this.httpService.postRequest(
      RequestPathList.deleteTask +
        `?courseId=${courseId}` +
        `&taskId=${taskId}`,
      null
    );
  }
}
