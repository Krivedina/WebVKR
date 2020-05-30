import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { CourseListComponent } from "./course-list/component/course-list.component";
import { TaskComponent } from "./task/component/task.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CourseListService } from "./course-list/data/course-list.base.service";
import { TaskBaseService } from "./task/data/task.base.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CustomComponentsModule } from "src/custom-components/custom-components.module";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [CourseListComponent, TaskComponent],
  exports: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomComponentsModule,
  ],
  providers: [CourseListService, TaskBaseService],
})
export class StudentPartModule {}
