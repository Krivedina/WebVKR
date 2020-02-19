import { Injectable } from "@angular/core";
import { HttpService } from "src/app/http/http.service";
import { publishReplay, refCount } from "rxjs/operators";

@Injectable()
export class StudentListBaseService {
  public listStudents: any = null;
  constructor(private httpService: HttpService) {
    this.listStudents = this.httpService.getListStudents();
  }
}
