import { Injectable } from "@angular/core";
import { HttpService } from "src/app/global-part/http/http.service";
import { RequestPathList } from "src/app/global-part/http/routing-path-list";
import { CacheListName } from "src/app/global-part/http/cashe-name";

@Injectable()
export class StudentListBaseService {
  constructor(private httpService: HttpService) {}

  public getGroupList(flag) {
    return this.httpService.getRequest(
      RequestPathList.inviteList,
      CacheListName.inviteList,
      flag
    );
  }

  public getCourseList() {
    return this.httpService.getRequest(
      RequestPathList.courseLink,
      CacheListName.courseListLink,
      false
    );
  }

  public postAddNewGroup(groupData) {
    return this.httpService.postRequest(RequestPathList.createGroup, groupData);
  }

  public postSaveGroup(groupData) {
    return this.httpService.postRequest(RequestPathList.editGroup, groupData);
  }

  public postAddCourse(groupId, courseData) {
    return this.httpService.postRequest(
      RequestPathList.addCourse + `?groupId=${groupId}`,
      courseData
    );
  }

  public postDeleteCourse(groupId, courseData) {
    return this.httpService.postRequest(
      RequestPathList.delteCourse + `?groupId=${groupId}`,
      courseData
    );
  }

  public postDeleteGroup(groupId) {
    return this.httpService.postRequest(
      RequestPathList.deleteGroup + `?id=${groupId}`,
      null
    );
  }

  public postInvite(groupId, email) {
    return this.httpService.postRequest(
      RequestPathList.sendInviteEmail + `?groupId=${groupId}&email=${email}`,
      null
    );
  }

  public postDeleteStudent(groupId, email) {
    return this.httpService.postRequest(
      RequestPathList.delteInviteEmail + `?groupId=${groupId}&email=${email}`,
      null
    );
  }
}
