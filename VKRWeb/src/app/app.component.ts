import { Component, OnInit } from "@angular/core";
import { AuthenticationBaseService } from "./authentication/data/authentication.base.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "VKRWeb";

  constructor(private authenticationBaseService: AuthenticationBaseService) {}
  public ngOnInit(): void {
    this.authenticationBaseService.checkAuthentication()
  }
}
