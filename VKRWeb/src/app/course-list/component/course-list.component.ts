import { Component, OnInit } from "@angular/core";
import { trigger, state, style } from "@angular/animations";
import { CourseListFormViewModel } from "../view-model/course-list-form.view-model";
import { CourseListService } from "../data/course-list.base.service";

@Component({
  selector: "course-list",
  templateUrl: "./course-list.html",
  styleUrls: ["./course-list.scss"],
})
export class CourseListComponent implements OnInit {
  public isOpen: boolean = false;

  public modelCourseList: CourseListFormViewModel = new CourseListFormViewModel();

  constructor(private courseListService: CourseListService) {}

  public ngOnInit(): void {
    this.courseListService.getCourseList()
    .subscribe(data => {
      // this.modelCourseList.fillModel(data);
    });
    this.modelCourseList.fillModel();
  }

  public openCourse() {
    this.isOpen = !this.isOpen;
  }
}
