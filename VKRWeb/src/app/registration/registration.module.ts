import { NgModule } from "@angular/core";
import { RegistrationComponent } from "./components/registration.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [RegistrationComponent],
  providers: [],
  exports: [RegistrationComponent],
  imports: [FormsModule, ReactiveFormsModule]
})
export class RegistrationModule {}
