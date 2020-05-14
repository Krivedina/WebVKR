import {
  Component,
  HostListener,
  ViewChild,
  ElementRef,
  OnInit,
} from "@angular/core";
import { EditCourseViewModel } from '../view-model/edit-course.view-model';
import { trigger, transition, style, animate } from '@angular/animations';

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

  public modelEditCourse: EditCourseViewModel = new EditCourseViewModel();

  public ngOnInit() {
    this.modelEditCourse.fillModel();
  }

  trackByFn(index, item) {   
    console.log(item) 
    return item.id;
 }

  @HostListener("click", ["$event"]) onClick(e: any) {
    if (e.target.className.match("edit-block-wrapper")) {
      this.isCreateCourse = false;
      this.isEditCourse = false;
    }
  }

  public openCourse() {
    this.isOpen = !this.isOpen;
  }

  public createCourse() {
    this.isCreateCourse = !this.isCreateCourse;
  }

  public editCourse(id) {
    this.isEditCourse = !this.isEditCourse;
  }

  public deleteCourse() {
    // this.courseList = this.courseList.filter(course => course)
  }

  public addTask() {}

  public deleteTask() {}

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
