import { Injectable } from "@angular/core";
import { HttpService } from "src/app/http/http.service";

@Injectable()
export class ProfileBaseService {
  constructor(private httpService: HttpService) {}

  public getUserProfile() {
    this.httpService.getUserData();
  }
}
