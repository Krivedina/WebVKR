import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { RoleEnum } from "static/role.enum";
import { AuthenticationBaseService } from "./authentication.base.service";

@Injectable()
export class AuthicationGuard implements CanActivate {
  constructor(private authenticationBaseService: AuthenticationBaseService) {}

  canActivate(): boolean {
    return this.authenticationBaseService.getIsAuthenticated().authentication;
  }
}

@Injectable()
export class StudentGuard implements CanActivate {
  constructor(private authenticationBaseService: AuthenticationBaseService) {}

  canActivate(): boolean {
    return (
      this.authenticationBaseService.getIsAuthenticated().authentication &&
      this.authenticationBaseService.getIsAuthenticated().role ===
        RoleEnum.student
    );
  }
}

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private authenticationBaseService: AuthenticationBaseService) {}

  canActivate(): boolean {
    return (
      this.authenticationBaseService.getIsAuthenticated().authentication &&
      this.authenticationBaseService.getIsAuthenticated().role ===
        RoleEnum.admin
    );
  }
}
