import { Injectable } from "@angular/core";
import { HttpService } from "src/app/http/http.service";
import { publishReplay, refCount } from "rxjs/operators";

@Injectable()
export class StudentListBaseService {
  public listStudents: any = null;
  public loader: boolean = true;
  constructor(private httpService: HttpService) {
    this.httpService.requestListStudents();
  }

  public requestIsDone() {
    this.listStudents = this.httpService.getListStudents();
    this.loader = false;
    console.log(this.listStudents);

    return this.loader;
  }
}
