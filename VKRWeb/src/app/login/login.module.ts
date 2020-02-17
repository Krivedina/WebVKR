import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "./components/login.component";
import { LoginBaseService } from './data/login.base.service';

@NgModule({
  declarations: [LoginComponent],
  providers: [LoginBaseService],
  exports: [LoginComponent],
  imports: [FormsModule, ReactiveFormsModule]
})
export class LoginModule {}
