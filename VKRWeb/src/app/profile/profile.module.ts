import { NgModule } from "@angular/core";
import { ProfileComponent } from "./components/profile.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [ProfileComponent],
  providers: [],
  exports: [ProfileComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class ProfileModule {}
