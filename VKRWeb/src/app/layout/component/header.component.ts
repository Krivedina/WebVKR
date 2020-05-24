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

  public ngOnInit(): void {
    // setInterval(() =>{
    //   const authInfo = this.HeaderBaseService.isAuthenticated()
    //   this.isAuth = authInfo.authentication;
    //   this.role = authInfo.role
    // }, 1000)
  }

  public isAuth() {
    return this.HeaderBaseService.isAuthenticated().authentication;
  }

  public isStudent() {
    return this.HeaderBaseService.isAuthenticated().role === RoleEnum.student;
  }

  public isAdmin() {
    return this.HeaderBaseService.isAuthenticated().role === RoleEnum.admin;
  }

  public logOut() {
    this.HeaderBaseService.logOutRequest();
  }
}
