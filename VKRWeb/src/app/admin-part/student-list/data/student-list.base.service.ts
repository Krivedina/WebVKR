import { Injectable } from "@angular/core";
import { HttpService } from 'src/app/global-part/http/http.service';

@Injectable()
export class StudentListBaseService {

  constructor(private httpService: HttpService) {
  }

}
