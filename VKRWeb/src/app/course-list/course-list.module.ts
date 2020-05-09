import { NgModule } from "@angular/core";
import { CourseListComponent } from "./component/course-list.component";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [CourseListComponent],
  exports: [],
  imports: [CommonModule, BrowserAnimationsModule, RouterModule],
})
export class CourseListModule {}
