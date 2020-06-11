import { Component, OnInit } from "@angular/core";
import { UserListViewModel } from "../view-model/user-list.view-model";
import { UserListBaseService } from "../data/user-list.base.service";

@Component({
  selector: "user-list",
  templateUrl: "./user-list.html",
  styleUrls: ["./user-list.scss"],
})
export class UserListComponent implements OnInit {
  public modelUserList = new UserListViewModel();

  constructor(private userListBaseService: UserListBaseService) {}
  
  public ngOnInit(): void {
    // this.userListBaseService.getStudentList().subscribe((studentData) => {
    //   this.modelUserList.fillModel(studentData);
    // })
  }

  public openGroup(group) {
    group.isViewOpen = !group.isViewOpen;
  }

  public toResultStudents() {}

}
