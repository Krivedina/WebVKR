import { Injectable } from "@angular/core";
import { HttpService } from "src/app/http/http.service";

@Injectable()
export class StudentListBaseService {
  constructor(private httpService: HttpService) {}

  public listStudents: any = {};

  public getListStudents() {
    this.httpService
      .requestGet("http://localhost:5000/user/1f4a0cc8b33c43c3beddfe6181c1b8c5")
      .subscribe((data: any) => (this.listStudents = data));
  }

}
