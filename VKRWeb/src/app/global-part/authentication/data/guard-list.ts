import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { RoleEnum } from "static/role.enum";
import { CacheListName } from "../../http/cashe-name";

@Injectable()
export class AuthicationGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean {
    /**
     * Здесь есть проблема, когда будем собирать проект в один модуль, бэк в курсе.
     */
    const localData = localStorage.getItem(CacheListName.userProfile);
    if (localData) {
      return !!localData.split(",")[0];
    }
    this.router.navigate(["**"]);
    
    return false;
  }
}

@Injectable()
export class StudentGuard implements CanActivate {
  canActivate(): boolean {
    const localData = localStorage.getItem(CacheListName.userProfile);
    if (localData) {
      console.log(localData.split(",")[0]);

      return (
        +localData.split(",")[1] === RoleEnum.student &&
        !!localData.split(",")[0]
      );
    }

    return false;
  }
}

@Injectable()
export class AdminGuard implements CanActivate {
  // constructor(private authenticationBaseService: AuthenticationBaseService) {}

  canActivate(): boolean {
    const localData = localStorage.getItem(CacheListName.userProfile);
    if (localData) {
      console.log(localData.split(",")[0]);

      return (
        +localData.split(",")[1] === RoleEnum.admin && !!localData.split(",")[0]
      );
    }

    return false;
  }
}

@Injectable()
export class NonAuthicationGuard implements CanActivate {
  canActivate(): boolean {
    const localData = localStorage.getItem(CacheListName.userProfile);
    if (localData) {
      return false;
    }

    return true;
  }
}
