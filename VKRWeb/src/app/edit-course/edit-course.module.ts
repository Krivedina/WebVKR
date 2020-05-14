import { NgModule } from "@angular/core";
import { EditCourseComponent } from "./component/edit-course.component";
import { EditCourseBaseService } from "./data/edit-course.base.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { CustomComponentsModule } from "src/custom-components/custom-components.module";

@NgModule({
  declarations: [EditCourseComponent],
  providers: [EditCourseBaseService],
  exports: [EditCourseComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CustomComponentsModule,
  ],
})
export class EditCourseModule {}
