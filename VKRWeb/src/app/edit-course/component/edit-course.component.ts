import {
  Component,
  HostListener,
  ViewChild,
  ElementRef,
  OnInit,
} from "@angular/core";
import { EditCourseViewModel } from "../view-model/edit-course.view-model";
import { trigger, transition, style, animate } from "@angular/animations";
import { FormGroup, FormControlName, FormControl } from "@angular/forms";
import { EditCourseBaseService } from "../data/edit-course.base.service";

@Component({
  selector: "edit-course",
  templateUrl: "./edit-course.html",
  styleUrls: ["./edit-course.scss"],
  // animations: [
  //   trigger("fadeInOut", [
  //     transition(":enter", [
  //       style({ opacity: 0 }),
  //       animate(200, style({ opacity: 1 })),
  //     ]),
  //     transition(":leave", [animate(200, style({ opacity: 0 }))]),
  //   ]),
  // ],
})
export class EditCourseComponent implements OnInit {
  public isOpen: boolean = true;
  public isCreateCourse: boolean = false;
  public isEditCourse: boolean = false;
  public isDeleteCourse: boolean = false;
  public isDeleteTask: boolean = false;

  public currentCourse: any = null;

  public modelEditCourse: EditCourseViewModel = new EditCourseViewModel();

  public addTaskForm = new FormGroup({
    name: new FormControl(),
    deadline: new FormControl(),
  });

  @HostListener("click", ["$event"]) onClick(e: any) {
    if (e.target.className.match("edit-block-wrapper")) {
      this.isCreateCourse = false;
      this.isEditCourse = false;
      this.isDeleteCourse = false;
      this.isDeleteTask = false;
      this.currentCourse = null;
    }
  }

  constructor(private editCourseBaseService: EditCourseBaseService) {}

  public ngOnInit() {
    this.fillCourseListPage()
  }

  public fillCourseListPage(flag = true) {
    this.editCourseBaseService.getCourseList(flag).subscribe((courseList) => {
      console.log(courseList);
      this.modelEditCourse.fillModel(courseList);
    });
  }

  trackByFn(index, item) {
    return item.id;
  }

  public openCourse() {
    this.isOpen = !this.isOpen;
  }

  public createCourseModal() {
    this.isCreateCourse = !this.isCreateCourse;
  }

  public editCourseModal(course: any) {
    this.isEditCourse = !this.isEditCourse;
    this.currentCourse = course;
  }

  public deleteCourseModal(course: any) {
    this.isDeleteCourse = !this.isDeleteCourse;
    this.currentCourse = course;
  }

  public deleteTaskModal() {
    this.isDeleteTask = !this.isDeleteTask;
  }

  public addTask() {
    console.log(this.addTaskForm.value);
  }

  public deleteCourse(value: string) {
    if (!value) {
      this.isDeleteCourse = false;
      this.currentCourse = null;
    } else {
      this.editCourseBaseService
        .postDeleteCourse(this.currentCourse.id)
        .subscribe((res) => {
          console.log(res);
          this.fillCourseListPage(false)
        });
      this.isDeleteCourse = false;
      this.currentCourse = null;
      console.log(this.currentCourse);
    }
  }

  public deleteTask(value: string) {}

  public editCurrentCourse(courseModel: any) {}

  public addNewCourse(newCourseModal: any) {
    const newCourseModel = this.fillNewCourseModel(newCourseModal);
    this.editCourseBaseService.postCreateCourse(newCourseModel);
    // this.modelEditCourse.courseList.push(newCourseModel);
    this.isCreateCourse = false;
  }

  private fillNewCourseModel(newCourseModal: any) {
    return {
      name: newCourseModal.firstTitle,
      maxScore: newCourseModal.secondTitle,
      courseTasks: [],
    };
  }
}
