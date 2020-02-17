import { Component, OnInit } from "@angular/core";
import { StudentListBaseService } from "../data/student-list.base.service";
import { HttpService } from 'src/app/http/http.service';

@Component({
  selector: "student-list",
  templateUrl: "./student-list.html",
  styleUrls: ["./student-list.scss"]
})
export class StudentListComponent extends StudentListBaseService {

    constructor(httpService: HttpService){
        super(httpService);
        this.getListStudents()
    }

  
}
