import { NgModule } from "@angular/core";
import { StudentListComponent } from "./components/student-list.components";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [StudentListComponent],
  providers: [],
  exports: [StudentListComponent],
  imports: [FormsModule, ReactiveFormsModule]
})
export class StudentListModule {}
