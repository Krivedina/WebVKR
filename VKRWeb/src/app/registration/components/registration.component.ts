import { Component } from "@angular/core";
import { RegistrationBaseService } from "../data/registration.base.service";
import { HttpService } from 'src/app/http/http.service';

@Component({
  selector: "registration",
  templateUrl: "./registration.html",
  styleUrls: ["./registration.scss"]
})
export class RegistrationComponent extends RegistrationBaseService {
  constructor(httpService: HttpService) {
    super(httpService);
  }
}
