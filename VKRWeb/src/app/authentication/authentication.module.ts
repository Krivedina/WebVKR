import { NgModule } from "@angular/core";
import { AuthenticationBaseService } from "./data/authentication.base.service";
import {
  AuthicationGuard,
  AdminGuard,
  StudentGuard,
} from "./data/checkAuthication";

@NgModule({
  providers: [
    AuthenticationBaseService,
    AuthicationGuard,
    StudentGuard,
    AdminGuard,
  ],
})
export class AuthenticationModule {}
