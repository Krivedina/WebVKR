import { NgModule } from "@angular/core";
import { StudentListComponent } from "./components/student-list.components";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { CustomComponentsModule } from "src/custom-components/custom-components.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [StudentListComponent],
  providers: [],
  exports: [StudentListComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CustomComponentsModule,
    RouterModule,
  ],
})
export class StudentListModule {}
