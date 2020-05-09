import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EditWindowComponent } from "./edit-window/components/edit-window";
import { CommonModule } from "@angular/common";
import { RequirementTextComponent } from "./requirement-text/components/requirement-text";

const customComponent = [RequirementTextComponent, EditWindowComponent];

@NgModule({
  declarations: customComponent,
  providers: [],
  exports: customComponent,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  entryComponents: customComponent,
})
export class CustomComponentsModule {}
