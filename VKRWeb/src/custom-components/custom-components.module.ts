import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EditWindowComponent } from "./edit-window/components/edit-window.component";
import { CommonModule } from "@angular/common";
import { RequirementTextComponent } from "./requirement-text/components/requirement-text.component";
import { CreateWindowComponent } from "./create-window/component/create-window.component";
import { ConfirmWindowComponent } from './confirm-window/components/confirm-window.component';

const customComponent = [
  RequirementTextComponent,
  EditWindowComponent,
  CreateWindowComponent,
  ConfirmWindowComponent
];

@NgModule({
  declarations: customComponent,
  providers: [],
  exports: customComponent,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  entryComponents: customComponent,
})
export class CustomComponentsModule {}
