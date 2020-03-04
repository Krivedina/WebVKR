import { NgModule } from "@angular/core";
import { StudentListComponent } from "./components/student-list.components";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [StudentListComponent],
  providers: [],
  exports: [StudentListComponent],
  imports: [FormsModule, ReactiveFormsModule, CommonModule]
})
export class StudentListModule {}
