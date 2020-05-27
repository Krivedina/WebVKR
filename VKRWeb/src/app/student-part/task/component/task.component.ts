import { Component, OnInit } from "@angular/core";
import { TaskService } from "../data/task.base.service";
import { TaskViewModel } from '../view-model/task.view-model';

@Component({
  selector: "task",
  templateUrl: "./task.html",
  styleUrls: ["./task.scss"],
})
export class TaskComponent implements OnInit {
  
  public modelTask:TaskViewModel = new TaskViewModel()

  public ngOnInit(): void {
    this.modelTask.fillModel()
  }

  public getUrl() {
    return "url('checkMark.svg')";
  }

  public getFileName() {
    let file = (<HTMLInputElement>document.getElementById("uploaded-file"))
      .value;
    file = file.replace(/\\/g, "/").split("/").pop();
    document.getElementById("file-name").innerHTML = "Имя файла: " + file;
  }
}
