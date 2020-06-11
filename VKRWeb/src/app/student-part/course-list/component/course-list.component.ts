import { Component, OnInit } from "@angular/core";
import { CourseListFormViewModel } from "../view-model/course-list-form.view-model";
import { CourseListService } from "../data/course-list.base.service";
import { Router } from "@angular/router";

@Component({
  selector: "course-list",
  templateUrl: "./course-list.html",
  styleUrls: ["./course-list.scss"],
})
export class CourseListComponent implements OnInit {
  public progress: any;
  public modelCourseList: CourseListFormViewModel = new CourseListFormViewModel();
  public isLoadingCoursePage: boolean;

  constructor(
    private courseListService: CourseListService,
  ) {}

  public ngOnInit(): void {
    this.isLoadingCoursePage = true;
    this.courseListService.getCourseList().subscribe((data) => {
      this.modelCourseList.fillModel(data);
      this.isLoadingCoursePage = false;
    });
  }

  trackByFn(index, item) {
    return item.id;
  }

  public openCourse(course) {
    console.log(course);
    course.isOpenView = !course.isOpenView;
  }

}
