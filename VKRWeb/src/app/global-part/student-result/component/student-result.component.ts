import { Component, OnInit } from "@angular/core";
import { StudentResultViewModel } from "../view-model/student-result.view-model";
import { StudentResultBaseService } from "../data/student-result.base.service";
import { Router } from "@angular/router";

@Component({
  selector: "student-result",
  templateUrl: "./student-result.html",
  styleUrls: ["./student-result.scss"],
})
export class StudentResultComponent implements OnInit {
  public studentResultViewModel: StudentResultViewModel = new StudentResultViewModel();

  constructor(
    private studentResultBaseService: StudentResultBaseService,
    private router: Router
  ) {}
  public ngOnInit(): void {
    this.studentResultViewModel.fillModel();
  }

  public openGroup(group) {
    group.isOpenView = !group.isOpenView;
  }

  public toUserList() {
    this.router.navigate(["user-list"]);
  }
}
