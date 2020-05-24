import { Component, OnInit, HostListener } from "@angular/core";
import { HttpService } from "src/app/http/http.service";
import { StudentListViewModel } from "../view-model/student-list.view-model";
import { FormGroup, FormControl } from "@angular/forms";

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
    }
  }

  constructor(httpService: HttpService) {}

  public ngOnInit(): void {
    this.modelStudentList.fillModel();
  }

  public openGroup() {
    this.isOpen = !this.isOpen;
  }

  public createGroupModal() {
    this.isCreateGroup = !this.isCreateGroup;
  }

  public deleteGroupModal() {
    this.isDeleteGroup = !this.isDeleteGroup;
  }

  public editGroupTitleModal() {
    this.isEditGroupTitle = !this.isEditGroupTitle;
  }

  public deleteUserModal() {
    this.isDeleteStudent = !this.isDeleteStudent;
  }

  public deleteCourseModal() {
    this.isDeleteCourse = !this.isDeleteCourse;
  }

  public deleteGroup(value: string) {
    if (value) {
      this.isDeleteGroup = false;
    } else {
      this.isDeleteGroup = false;
    }
  }

  public deleteStudent(value: string) {}

  public deleteCourse(value: string) {}

  public addNewGroup() {
    console.log(this.addStudentGroupForm.value);
  }

  public addNewCourse() {
    console.log(this.addCourseGroupForm.value);
  }
}
