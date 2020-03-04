import { Component } from "@angular/core";
import { LoginBaseService } from "../data/login.base.service";
import { HttpService } from "src/app/http/http.service";

@Component({
  selector: "login",
  templateUrl: "./login.html",
  styleUrls: ["./login.scss"]
})
export class LoginComponent extends LoginBaseService {
  constructor(httpService: HttpService) {
    super(httpService);
  }
}
  