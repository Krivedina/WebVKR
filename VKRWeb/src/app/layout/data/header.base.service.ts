import { Injectable } from "@angular/core";
import { AuthenticationBaseService } from "src/app/authentication/data/authentication.base.service";

@Injectable()
export class HeaderBaseService {
  constructor(private authenticationBaseService: AuthenticationBaseService) {}

  public isAuthenticated() {
    return this.authenticationBaseService.getIsAuthenticated();
  }

  public logOutRequest(){
    this.authenticationBaseService.logOut(); 
  }
}
