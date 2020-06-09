import { Component, OnInit, HostListener } from "@angular/core";
import { StudentListViewModel } from "../view-model/student-list.view-model";
import { FormGroup, FormControl } from "@angular/forms";
import { StudentListBaseService } from "../data/student-list.base.service";

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

  constructor(private studentListBaseService: StudentListBaseService) {}

  public ngOnInit(): void {
    this.studentListBaseService.getGroupList().subscribe((data) => {
      console.log(data);
    });
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

  public addNewStudent(group) {
    console.log(this.addStudentGroupForm.value, group);
  }

  public addNewGroup(newGroupName) {
    this.studentListBaseService
      .postAddNewGroup({ name: newGroupName })
      .subscribe((res) => {
        console.log(res);
      });
    this.isCreateGroup = false;
  }

  public addNewCourse() {
    console.log(this.addCourseGroupForm.value);
  }
}
