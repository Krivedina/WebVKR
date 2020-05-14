import { NgModule } from "@angular/core";
import { CourseListComponent } from "./component/course-list.component";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { CourseListService } from './data/course-list.base.service';

@NgModule({
  declarations: [CourseListComponent],
  exports: [],
  imports: [CommonModule, BrowserAnimationsModule, RouterModule],
  providers: [CourseListService]
})
export class CourseListModule {}
