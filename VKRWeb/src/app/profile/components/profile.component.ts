import { Component, OnInit } from "@angular/core";
import { ProfileBaseService } from "../data/profile.base.service";
import { HttpService } from "src/app/http/http.service";

@Component({
  selector: "profile",
  templateUrl: "./profile.html",
  styleUrls: ["./profile.scss"]
})
export class ProfileComponent extends ProfileBaseService implements OnInit {
  constructor(httpService: HttpService) {
    super(httpService);
  }

  public ngOnInit() {
    this.getUserProfile();
  }
}
