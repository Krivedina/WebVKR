import { NgModule } from "@angular/core";
import { EditTaskBaseService } from "./data/edit-task.base.service";
import { EditTaskComponent } from "./components/edit-task.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { CustomComponentsModule } from "../../custom-components/custom-components.module";

@NgModule({
  declarations: [EditTaskComponent],
  providers: [EditTaskBaseService],
  exports: [EditTaskComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CustomComponentsModule,
  ],
})
export class EditTaskModule {}
