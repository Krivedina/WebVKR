import { Component, OnInit } from "@angular/core";
import { CheckTaskBaseService } from "../data/check-task.base.service";
import { CheckTaskViewModel } from "../view-model/check-task.view-model";

@Component({
  selector: "check-task",
  templateUrl: "./check-task.html",
  styleUrls: ["./check-task.scss"],
})
export class CheckTaskComponent implements OnInit {
  public downloadEntryURL: any;
  public downloadSolutionURL: any;
  constructor(private checkTaskBaseService: CheckTaskBaseService) {}

  public checkTaskModel: CheckTaskViewModel = new CheckTaskViewModel();

  public ngOnInit(): void {}
}
