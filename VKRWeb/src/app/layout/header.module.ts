import { NgModule } from "@angular/core";
import { HeaderComponent } from "./component/header.component";
import { HeaderBaseService } from "./data/header.base.service";
import { RouterModule } from "@angular/router";
import { DirectiveModule } from "../directives/directive.module";

@NgModule({
  declarations: [HeaderComponent],
  providers: [HeaderBaseService],
  exports: [HeaderComponent],
  imports: [RouterModule, DirectiveModule]
})
export class HeaderModule {}
