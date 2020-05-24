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
    }
  }

  public ngOnInit() {
    this.modelEditCourse.fillModel();
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

  public editCourseModal() {
    this.isEditCourse = !this.isEditCourse;
  }

  public deleteCourseModal() {
    this.isDeleteCourse = !this.isDeleteCourse;
  }

  public deleteTaskModal() {
    this.isDeleteTask = !this.isDeleteTask;
  }

  public addTask() {
    console.log(this.addTaskForm.value);
  }

  public deleteCourse(value: string) {}

  public deleteTask(value: string) {}

  public editCurrentCourse(courseModel: any) {}

  public addNewCourse(newCourseModel: any) {
    newCourseModel = this.fillNewCourseModel(newCourseModel);
    this.modelEditCourse.courseList.push(newCourseModel);
    this.isCreateCourse = false;
  }

  private fillNewCourseModel(courseModel: any) {
    courseModel.courseName = courseModel.firstTitle;
    courseModel.courseMaxScore = courseModel.secondTitle;
    courseModel.taskList = [];

    delete courseModel.firstTitle;
    delete courseModel.secondTitle;

    return courseModel;
  }
}
