import { NgModule } from "@angular/core";
import { RegistrationComponent } from "./components/registration.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthenticationModule } from '../authentication/authentication.module';
import { RegistrationBaseService } from './data/registration.base.service';

@NgModule({
  declarations: [RegistrationComponent],
  providers: [RegistrationBaseService],
  exports: [RegistrationComponent],
  imports: [FormsModule, ReactiveFormsModule, AuthenticationModule]
})
export class RegistrationModule {}
