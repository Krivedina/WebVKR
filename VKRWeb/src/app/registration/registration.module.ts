import { NgModule } from "@angular/core";
import { RegistrationComponent } from "./components/registration.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthenticationModule } from "../authentication/authentication.module";
import { RegistrationBaseService } from "./data/registration.base.service";
import { CustomComponentsModule } from "src/custom-components/custom-components.module";
import { AppModule } from '../app.module';
import { WrapperMainModule } from '../wrapper-main/wrapper-main.module';

@NgModule({
  declarations: [RegistrationComponent],
  providers: [RegistrationBaseService],
  exports: [RegistrationComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AuthenticationModule,
    CustomComponentsModule,
    WrapperMainModule
  ],
})
export class RegistrationModule {}
