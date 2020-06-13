import { Component, OnInit } from "@angular/core";
import { CourseListFormViewModel } from "../view-model/course-list-form.view-model";
import { CourseListService } from "../data/course-list.base.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { mergeMap } from "rxjs/operators";

@Component({
  selector: "course-list",
  templateUrl: "./course-list.html",
  styleUrls: ["./course-list.scss"],
})
export class CourseListComponent implements OnInit {
  public progress: any;
  public modelCourseList: CourseListFormViewModel = new CourseListFormViewModel();
  public isLoadingCoursePage: boolean;
  public isAnoutherUser: boolean = false;

  constructor(
    private courseListService: CourseListService,
    private activatedRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.isLoadingCoursePage = true;
    this.activatedRoute.paramMap
      .pipe(
        mergeMap((params: ParamMap) => {
          const userId = params.get("userId") || null;
          if (userId) {
            this.isAnoutherUser = true;
          }
          return this.courseListService.getCourseList(userId);
        })
      )
      .subscribe((courseData) => {
        this.modelCourseList.fillModel(courseData);
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
