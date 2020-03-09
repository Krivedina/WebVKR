import { Injectable } from "@angular/core";
import { HttpService } from "src/app/http/http.service";
import { publishReplay, refCount } from "rxjs/operators";
import { RequestPathList } from "src/app/http/routing-path-list";
import { RequestDataName } from "src/app/http/request-data-name";

@Injectable()
export class StudentListBaseService {
  public listStudents: any = null;
  public loader: boolean = true;
  constructor(private httpService: HttpService) {
    this.httpService.getRequest(
      RequestPathList.listStudents,
      RequestDataName.ListStudents
    );
  }

  public requestIsDone() {
    this.listStudents = this.httpService.getCacheData(
      RequestDataName.ListStudents
    );
    this.loader = false;
    console.log(this.listStudents);

    return this.loader;
  }
}
