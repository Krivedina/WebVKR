import { NgModule } from "@angular/core";
import { HeaderComponent } from "./component/header.component";
import { HeaderBaseService } from "./data/header.base.service";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AuthenticationModule } from "../authentication/authentication.module";

@NgModule({
  declarations: [HeaderComponent],
  providers: [HeaderBaseService],
  exports: [HeaderComponent],
  imports: [RouterModule, CommonModule, AuthenticationModule],
})
export class HeaderModule {}
