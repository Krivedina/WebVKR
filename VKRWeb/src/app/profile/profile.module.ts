import { NgModule } from "@angular/core";
import { ProfileComponent } from "./components/profile.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ProfileBaseService } from "./data/profile.base.service";
import { AuthenticationBaseService } from "../authentication/data/authentication.base.service";

@NgModule({
  declarations: [ProfileComponent],
  providers: [ProfileBaseService, AuthenticationBaseService],
  exports: [ProfileComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class ProfileModule {}
