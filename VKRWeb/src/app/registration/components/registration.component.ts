import { Component } from "@angular/core";
import { RegistrationBaseService } from "../data/registration.base.service";

@Component({
  selector: "registration",
  templateUrl: "./registration.html",
  styleUrls: ["./registration.scss"]
})
export class RegistrationComponent extends RegistrationBaseService {
  constructor() {
    super();
  }
}
