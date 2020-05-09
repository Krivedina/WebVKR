import { NgModule } from "@angular/core";
import { HeaderComponent } from "./component/header.component";
import { HeaderBaseService } from "./data/header.base.service";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [HeaderComponent],
  providers: [HeaderBaseService],
  exports: [HeaderComponent],
  imports: [RouterModule]
})
export class HeaderModule {}
