import { Component, OnInit } from "@angular/core";
import { TaskBaseService } from "../data/task.base.service";
import { TaskViewModel } from "../view-model/task.view-model";
import { ParamMap, ActivatedRoute } from "@angular/router";
import { mergeMap } from "rxjs/operators";
import { RequestPathList } from "src/app/global-part/http/routing-path-list";
import { FormGroup, FormControlName, FormControl } from "@angular/forms";
import { WrapperMainBaseService } from 'src/app/global-part/wrapper-main/data/wrapper-main.base.service';

@Component({
  selector: "task",
  templateUrl: "./task.html",
  styleUrls: ["./task.scss"],
})
export class TaskComponent implements OnInit {
  public modelTask: TaskViewModel = new TaskViewModel();
  public downloadEntryURL: any;
  public uploadFileName: string;
  public progress: any;
  public uploadSolutionFormData = new FormData();

  public uploadSolutionFrom = new FormGroup({
    file: new FormControl(),
  });

  constructor(
    private taskBaseService: TaskBaseService,
    private route: ActivatedRoute,
    private wrapperMainBaseService: WrapperMainBaseService
  ) {}

  public ngOnInit(): void {
    this.route.paramMap
      .pipe(
        mergeMap((params: ParamMap) => {
          const taskId = params.get("taskId");
          return this.taskBaseService.getTask(taskId);
        })
      )
      .subscribe((taskData) => {
        console.log(taskData);
        this.modelTask.fillModel(taskData);
        this.progress = Math.floor(
          (+this.modelTask.currentScore / +this.modelTask.maxScore) * 100
        );
        if (this.progress > 100) {
          this.progress = 100;
        }
        this.downloadEntryURL =
          RequestPathList.downloadEntryTaskData +
          `?attachmentId=${this.modelTask.input.id}`;
      });
  }

  public uploadSolution() {
    this.taskBaseService
      .postUploadSolution(this.uploadSolutionFormData, this.modelTask.id)
      .subscribe((res) => {
        console.log(res);
        this.wrapperMainBaseService.showMessage('Решение отправлено', true);
      },error => {
        this.wrapperMainBaseService.showMessage('Отправить решение не удалось', false);
      });
    console.log(this.uploadSolutionFrom);
    this.uploadSolutionFormData.delete("file");
  }

  public getFileName(event) {
    this.uploadFileName =
      "Имя файла: " +
      this.uploadSolutionFrom.value.file.replace(/\\/g, "/").split("/").pop();
    this.uploadSolutionFormData.append(
      "file",
      event.target.files[0],
      // this.uploadFileName
    );
  }
}
