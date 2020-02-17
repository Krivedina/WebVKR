import { NgModule } from "@angular/core";
import { HttpService } from "./http.service";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  providers: [HttpService]
})
export class HttpModule {}
