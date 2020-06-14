import { Component, OnInit, HostListener } from "@angular/core";
import { StudentListViewModel } from "../view-model/student-list.view-model";
import { FormGroup, FormControl } from "@angular/forms";
import { StudentListBaseService } from "../data/student-list.base.service";
import { mergeMap, catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { forkJoin, of } from "rxjs";
import { WrapperMainBaseService } from "src/app/global-part/wrapper-main/data/wrapper-main.base.service";

@Component({
  selector: "student-list",
  templateUrl: "./student-list.html",
  styleUrls: ["./student-list.scss"],
})
export class StudentListComponent implements OnInit {
  public isOpen: boolean = true;
  public isCreateGroup: boolean = false;
  public isStudentPageLoad: boolean = false;

  public currentGroup: any;
  public currentStudent: any;
  public currentCourse: any;
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
      this.isCreateGroup = false;
      if (this.currentGroup) {
        this.currentGroup.isEditGroupTitle = false;
        this.currentGroup.isDeleteGroup = false;
        this.currentGroup.isDeleteCourse = false;
      }
      if (this.currentStudent) {
        this.currentStudent.isDeleteStudent = false;
      }
      if (this.currentCourse) {
        this.currentCourse.isDeleteCourse = false;
      }
      this.currentCourse = null;
      this.currentGroup = null;
      this.currentStudent = null;
    }
  }

  constructor(
    private studentListBaseService: StudentListBaseService,
    private router: Router,
    private wrapperMainBaseService: WrapperMainBaseService
  ) {}

  public ngOnInit(): void {
    this.createStudentListPage();
  }

  public createStudentListPage(flag = true) {
    this.isStudentPageLoad = true;
    forkJoin(
      this.studentListBaseService.getGroupList(flag),
      this.studentListBaseService.getCourseList()
    ).subscribe((groupDataList) => {
      const groupData = groupDataList[0];
      this.allCourseList = groupDataList[1];
      this.modelStudentList.fillModel(groupData);
      this.isStudentPageLoad = false;
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

  public deleteUserModal(student) {
    this.currentStudent = student;
    this.currentStudent.isDeleteStudent = !this.currentStudent.isDeleteStudent;
  }

  public deleteCourseModal(course) {
    this.currentCourse = course;
    this.currentCourse.isDeleteCourse = !this.currentCourse.isDeleteCourse;
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

  public deleteStudent(value: string, group) {
    if (!value) {
      this.currentStudent.isDeleteStudent = false;
    } else {
      this.currentGroup = group;
      this.studentListBaseService
        .postDeleteStudent(group.id, this.addStudentGroupForm.value.email)
        .pipe(
          mergeMap(() => {
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
    }
    this.currentStudent = null;
    console.log(value);
  }

  public deleteCourse(value: string, group) {
    if (!value) {
      this.currentCourse.isDeleteCourse = false;
      return;
    }
    this.currentGroup = group;
    this.studentListBaseService
      .postDeleteCourse(group.id, [this.addCourseGroupForm.value.course])
      .pipe(
        mergeMap(() => this.studentListBaseService.getGroupList(false)),
        catchError((error) => {
          return of(error);
        })
      )
      .subscribe((groupData) => {
        if (groupData.name === "HttpErrorResponse") {
          this.wrapperMainBaseService.showMessage(
            "Ошибка при удалении курса",
            false
          );
        } else {
          this.modelStudentList.fillModel(groupData);
          this.modelStudentList.groupList.forEach((group) => {
            if (group.id === this.currentGroup.id) {
              group.isOpenView = true;
            }
          });
          this.wrapperMainBaseService.showMessage(
            "Курс удален",
            true
          );
        }
        this.currentCourse.isDeleteCourse = false;
      });
  }

  public addNewStudent(group) {
    this.currentGroup = group;
    this.studentListBaseService
      .postInvite(group.id, this.addStudentGroupForm.value.email)
      .pipe(
        mergeMap(() => {
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

  public toCourseTasks(course) {
    console.log(course);
    this.router.navigate([`/edit-course`]);
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
