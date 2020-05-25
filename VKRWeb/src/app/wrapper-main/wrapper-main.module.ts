import { NgModule } from "@angular/core";
import { WrapperMainBaseService } from "./wrapper-main.base.service";
import { WrapperMainComponent } from "./components/wrapper-main.component";

@NgModule({
  declarations: [WrapperMainComponent],
  entryComponents: [WrapperMainComponent],
  exports: [WrapperMainComponent],
  imports: [],
  providers: [WrapperMainBaseService],
})
export class WrapperMainModule {}
