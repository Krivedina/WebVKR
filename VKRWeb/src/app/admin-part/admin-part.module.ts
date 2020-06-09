import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CustomComponentsModule } from "src/custom-components/custom-components.module";
import { StudentListComponent } from "./student-list/components/student-list.components";

import { EditTaskComponent } from "./edit-task/components/edit-task.component";
import { EditTaskBaseService } from "./edit-task/data/edit-task.base.service";
import { EditCourseComponent } from "./edit-course/component/edit-course.component";
import { EditCourseBaseService } from "./edit-course/data/edit-course.base.service";
import { BrowserModule } from "@angular/platform-browser";
import { StudentListBaseService } from "./student-list/data/student-list.base.service";

const components = [
  EditTaskComponent,
  EditCourseComponent,
  StudentListComponent,
];

@NgModule({
  declarations: components,
  providers: [
    EditCourseBaseService,
    EditTaskBaseService,
    StudentListBaseService,
  ],
  exports: components,
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    CustomComponentsModule,
  ],
})
export class AdminPartModule {}
