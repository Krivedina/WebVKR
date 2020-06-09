import { Component, OnInit } from "@angular/core";
import { CourseListFormViewModel } from "../view-model/course-list-form.view-model";
import { CourseListService } from "../data/course-list.base.service";
import { Router } from '@angular/router';

@Component({
  selector: "course-list",
  templateUrl: "./course-list.html",
  styleUrls: ["./course-list.scss"],
})
export class CourseListComponent implements OnInit {

  public progress: any;
  public modelCourseList: CourseListFormViewModel = new CourseListFormViewModel();

  constructor(private courseListService: CourseListService, private s:Router) {}

  public ngOnInit(): void {
    this.courseListService.getCourseList().subscribe((data) => {
      this.modelCourseList.fillModel(data);
     
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
