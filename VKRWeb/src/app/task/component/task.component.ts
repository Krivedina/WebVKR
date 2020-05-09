import { Component } from "@angular/core";
import { TaskService } from "../data/task.base.service";

@Component({
  selector: "task",
  templateUrl: "./task.html",
  styleUrls: ["./task.scss"],
})
export class TaskComponent extends TaskService {

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
