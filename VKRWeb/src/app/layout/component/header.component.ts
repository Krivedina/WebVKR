import { Component, OnInit } from "@angular/core";
import { HeaderBaseService } from "../data/header.base.service";
import { RoleEnum } from 'static/role.enum';

@Component({
  selector: "site-header",
  templateUrl: "./header.html",
  styleUrls: ["./header.scss"]
})
export class HeaderComponent implements OnInit {
  
  public isAuth: boolean;
  public role: number;

  constructor(private HeaderBaseService: HeaderBaseService){

  }

  public ngOnInit(): void {
    setInterval(() =>{
      const authInfo = this.HeaderBaseService.isAuthenticated()
      this.isAuth = authInfo.authentication;
      this.role = authInfo.role
    }, 1000)

  }

  public isStudent(){
    return this.role === RoleEnum.student && this.isAuth;
  }

  public isAdmin(){
    return this.role === RoleEnum.admin && this.isAuth;
  }

  public logOut(){
    this.HeaderBaseService.logOutRequest()
  }
}
