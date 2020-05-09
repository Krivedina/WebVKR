import { Component, OnInit } from "@angular/core";
import { ProfileBaseService } from "../data/profile.base.service";
import { HttpService } from "src/app/http/http.service";

@Component({
  selector: "profile",
  templateUrl: "./profile.html",
  styleUrls: ["./profile.scss"]
})
export class ProfileComponent extends ProfileBaseService{
  public isEditProfile: boolean;

  constructor(httpService: HttpService) {
    super(httpService);
    this.isEditProfile = false;
  }
  
  public editProfile() {
    this.isEditProfile = !this.isEditProfile;
  }
}
