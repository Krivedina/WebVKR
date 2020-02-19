import { NgModule } from "@angular/core";
import { HttpService } from "./http.service";
import { HttpClientModule } from "@angular/common/http";
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [HttpClientModule],
  providers: [HttpService]
})
export class HttpModule {}
