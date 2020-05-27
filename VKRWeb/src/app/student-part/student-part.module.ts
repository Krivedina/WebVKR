import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { CourseListComponent } from "./course-list/component/course-list.component";
import { TaskComponent } from "./task/component/task.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CourseListService } from "./course-list/data/course-list.base.service";

@NgModule({
  declarations: [CourseListComponent, TaskComponent],
  exports: [],
  imports: [CommonModule, BrowserAnimationsModule, RouterModule],
  providers: [CourseListService],
})
export class StudentPartModule {}
