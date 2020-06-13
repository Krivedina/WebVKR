import { Component, OnInit, HostListener } from "@angular/core";
import { StudentListViewModel } from "../view-model/student-list.view-model";
import { FormGroup, FormControl } from "@angular/forms";
import { StudentListBaseService } from "../data/student-list.base.service";
import { mergeMap } from "rxjs/operators";
import { Router } from "@angular/router";
import { from, of, forkJoin } from "rxjs";

@Component({
  selector: "student-list",
  templateUrl: "./student-list.html",
  styleUrls: ["./student-list.scss"],
})
export class StudentListComponent implements OnInit {
  public isOpen: boolean = true;
  public isDeleteGroup: boolean = false;
  public isCreateGroup: boolean = false;
  public isEditGroupTitle: boolean = false;
  public isDeleteStudent: boolean = false;
  public isDeleteCourse: boolean = false;

  public currentGroup: any;
  public allCourseList: any;

  public modelStudentList: StudentListViewModel = new StudentListViewModel();

  public addStudentGroupForm = new FormGroup({
    email: new FormControl(),
  });

  public addCourseGroupForm = new FormGroup({
    course: new FormControl(),
  });

  @HostListener("click", ["$event"]) onClick(e: any) {
    if (e.target.className.match("edit-block-wrapper")) {
      this.isDeleteGroup = false;
      this.isCreateGroup = false;
      this.isEditGroupTitle = false;
      this.isDeleteStudent = false;
      this.isDeleteCourse = false;
      if (this.currentGroup) {
        this.currentGroup.isEditGroupTitle = false;
        this.currentGroup.isDeleteGroup = false;
      }
      this.currentGroup = null;
    }
  }

  constructor(
    private studentListBaseService: StudentListBaseService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.createStudentListPage();
  }

  public createStudentListPage(flag = true) {
    forkJoin(
      this.studentListBaseService.getGroupList(flag),
      this.studentListBaseService.getCourseList()
    ).subscribe((groupDataList) => {
      const groupData = groupDataList[0];
      this.allCourseList = groupDataList[1];
      this.modelStudentList.fillModel(groupData);
    });
  }

  public openGroup(group) {
    group.isOpenView = !group.isOpenView;
  }

  public createGroupModal() {
    this.isCreateGroup = !this.isCreateGroup;
  }

  public deleteGroupModal(group) {
    this.currentGroup = group;
    this.currentGroup.isDeleteGroup = !this.currentGroup.isDeleteGroup;
  }

  public editGroupTitleModal(group) {
    this.currentGroup = group;
    this.currentGroup.isEditGroupTitle = !this.currentGroup.isEditGroupTitle;
  }

  public deleteUserModal() {
    this.isDeleteStudent = !this.isDeleteStudent;
  }

  public deleteCourseModal() {
    this.isDeleteCourse = !this.isDeleteCourse;
  }

  public deleteGroup(value: string) {
    if (!value) {
      this.currentGroup.isDeleteGroup = false;
    } else {
      this.studentListBaseService
        .postDeleteGroup(this.currentGroup.id)
        .pipe(mergeMap(() => this.studentListBaseService.getGroupList(false)))
        .subscribe((groupData) => {
          this.modelStudentList.fillModel(groupData);
        });
    }
    this.currentGroup.isDeleteGroup = false;
  }

  public editGroup(newGroupName) {
    this.studentListBaseService
      .postSaveGroup({
        ...this.currentGroup,
        name: newGroupName,
      })
      .pipe(mergeMap((res) => this.studentListBaseService.getGroupList(false)))
      .subscribe((groupData) => {
        this.modelStudentList.fillModel(groupData);
      });
    this.currentGroup.isEditGroupTitle = false;
  }

  public deleteStudent(value: string) {}

  public deleteCourse(value: string) {}

  public addNewStudent(group) {
    console.log(this.addStudentGroupForm.value, group);
    this.currentGroup = group;
    this.studentListBaseService
      .postInvite(group.id, this.addStudentGroupForm.value.email)
      .pipe(
        mergeMap((res) => {
          console.log(res);
          return this.studentListBaseService.getGroupList(false);
        })
      )
      .subscribe((groupData) => {
        this.modelStudentList.fillModel(groupData);
        this.modelStudentList.groupList.forEach((group) => {
          if (group.id === this.currentGroup.id) {
            group.isOpenView = true;
          }
        });
        this.currentGroup = null;
      });

    this.addStudentGroupForm.reset();
  }

  public addNewGroup(newGroupName) {
    this.studentListBaseService
      .postAddNewGroup({ name: newGroupName, officialName: null })
      .subscribe(() => {
        this.createStudentListPage(false);
      });
    this.isCreateGroup = false;
  }

  public addNewCourse(group) {
    this.currentGroup = group;
    this.studentListBaseService
      .postAddCourse(group.id, [this.addCourseGroupForm.value.course])
      .pipe(mergeMap(() => this.studentListBaseService.getGroupList(false)))
      .subscribe((groupData) => {
        this.modelStudentList.fillModel(groupData);
        this.modelStudentList.groupList.forEach((group) => {
          if (group.id === this.currentGroup.id) {
            group.isOpenView = true;
          }
        });
        this.currentGroup = null;
      });
  }

  public toCourseList(student) {
    const studentName = student.name.replace(/\s+/g, "_");
    this.router.navigate([
      `/course-list/user/${studentName}/${student.studentId}`,
    ]);
  }

  public toProfile(student) {
    const studentName = student.name.replace(/\s+/g, "_");
    this.router.navigate([`/profile/user/${studentName}/${student.studentId}`]);
  }
}
