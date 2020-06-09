import { Component, OnInit } from "@angular/core";
import { HeaderBaseService } from "../data/header.base.service";
import { RoleEnum } from "static/role.enum";

@Component({
  selector: "site-header",
  templateUrl: "./header.html",
  styleUrls: ["./header.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(private HeaderBaseService: HeaderBaseService) {}

  public currentName: string;

  ngOnInit(): void {
    this.getName();
  }

  public isAuth() {
    return this.HeaderBaseService.isAuthenticated().userId;
  }

  public isStudent() {
    return this.HeaderBaseService.isAuthenticated().role === RoleEnum.student;
  }

  public isAdmin() {
    return this.HeaderBaseService.isAuthenticated().role === RoleEnum.admin;
  }

  public getName() {
    return this.HeaderBaseService.getShortName().subscribe((userData) => {
      this.currentName = `${userData.surname} ${userData.firstName[0]}. ${userData.secondName[0]}.`;
      console.log(userData);
    });
  }

  public logOut() {
    this.HeaderBaseService.logOutRequest();
  }
}
