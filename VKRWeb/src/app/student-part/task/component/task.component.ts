import { Component, OnInit } from "@angular/core";
import { TaskBaseService } from "../data/task.base.service";
import { TaskViewModel } from "../view-model/task.view-model";
import { ParamMap, ActivatedRoute } from "@angular/router";
import { mergeMap } from "rxjs/operators";

@Component({
  selector: "task",
  templateUrl: "./task.html",
  styleUrls: ["./task.scss"],
})
export class TaskComponent implements OnInit {
  public modelTask: TaskViewModel = new TaskViewModel();

  constructor(
    private taskBaseService: TaskBaseService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.route.paramMap
      .pipe(
        mergeMap((params: ParamMap) => {
          const id = params.get("id");
          return this.taskBaseService.getTask(id);
        })
      )
      .subscribe((taskData) => {
        console.log(taskData);
      });

    // .subscribe((taskData) => {
    //   console.log(taskData);
    // });
    this.modelTask.fillModel();
  }

  // public getUrl() {
  //   return "url('checkMark.svg')";
  // }

  public getFileName() {
    let file = (<HTMLInputElement>document.getElementById("uploaded-file"))
      .value;
    file = file.replace(/\\/g, "/").split("/").pop();
    document.getElementById("file-name").innerHTML = "Имя файла: " + file;
  }
}
