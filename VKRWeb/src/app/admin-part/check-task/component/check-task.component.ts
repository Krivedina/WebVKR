import { Component, OnInit } from "@angular/core";
import { CheckTaskBaseService } from "../data/check-task.base.service";
import { CheckTaskViewModel } from "../view-model/check-task.view-model";
import { TaskBaseService } from "src/app/student-part/task/data/task.base.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { mergeMap } from "rxjs/operators";
import { RequestPathList } from "src/app/global-part/http/routing-path-list";
import {
  FormGroup,
  FormControl,
  FormGroupName,
  FormControlName,
} from "@angular/forms";
import { EditTaskBaseService } from "../../edit-task/data/edit-task.base.service";

@Component({
  selector: "check-task",
  templateUrl: "./check-task.html",
  styleUrls: ["./check-task.scss"],
})
export class CheckTaskComponent implements OnInit {
  public downloadEntryURL: any;
  public downloadSolutionURL: any;
  public progress: any;

  public currentTaskId: any;
  public currentStudentId: any;

  public isCheckTaskPageLoad: boolean = false;

  public taskScoreForm: FormGroup = new FormGroup({
    currentScore: new FormControl(),
  });

  constructor(
    private checkTaskBaseService: CheckTaskBaseService,
    private taskBaseService: TaskBaseService,
    private editTaskBaseService: EditTaskBaseService,
    private activatedRoute: ActivatedRoute
  ) {}

  public checkTaskModel: CheckTaskViewModel = new CheckTaskViewModel();

  public ngOnInit(): void {
    this.isCheckTaskPageLoad = true;
    this.activatedRoute.paramMap
      .pipe(
        mergeMap((params: ParamMap) => {
          this.currentTaskId = params.get("taskId");
          this.currentStudentId = params.get("userId");
          return this.checkTaskBaseService.getTask(
            this.currentTaskId,
            this.currentStudentId
          );
        })
      )
      .subscribe((taskData) => {
        this.checkTaskModel.fillModel(taskData);

        if (this.checkTaskModel.input) {
          this.downloadEntryURL =
            RequestPathList.downloadEntryTaskData +
            `?attachmentId=${this.checkTaskModel.input.id}`;
        }

        this.downloadSolutionURL =
          RequestPathList.downloadSolution +
          `?attachmentId=${this.checkTaskModel.id}`;

        this.isCheckTaskPageLoad = false;
      });
  }

  public changeScore() {
    const newScore =
      this.taskScoreForm.value.currentScore > this.checkTaskModel.maxScore
        ? this.checkTaskModel.maxScore
        : this.taskScoreForm.value.currentScore;
    this.checkTaskBaseService
      .postRateTask(
        {
          ...this.checkTaskModel,
          currentScore: +newScore,
        },
        this.currentStudentId
      )
      .pipe(
        mergeMap(() => {
          return this.checkTaskBaseService.getTask(
            this.currentTaskId,
            this.currentStudentId
          );
        })
      )
      .subscribe((taskData) => {
        this.checkTaskModel.fillModel(taskData);
        this.taskScoreForm.reset();

        if (this.checkTaskModel.input) {
          this.downloadEntryURL =
            RequestPathList.downloadEntryTaskData +
            `?attachmentId=${this.checkTaskModel.input.id}`;
        }

        this.downloadSolutionURL =
          RequestPathList.downloadSolution +
          `?attachmentId=${this.checkTaskModel.id}`;
      });
  }

  public completeTask() {
    const requirementList = this.checkTaskModel.requirementList.map(
      (requirement) => {
        requirement.status = true;
        return requirement;
      }
    );
    this.checkTaskBaseService
      .postRateTask(
        {
          ...this.checkTaskModel,
          requirementList: requirementList,
          currentScore: +this.checkTaskModel.maxScore,
        },
        this.currentStudentId
      )
      .pipe(
        mergeMap(() => {
          return this.checkTaskBaseService.getTask(
            this.currentTaskId,
            this.currentStudentId
          );
        })
      )
      .subscribe((taskData) => {
        this.checkTaskModel.fillModel(taskData);
        this.taskScoreForm.reset();

        if (this.checkTaskModel.input) {
          this.downloadEntryURL =
            RequestPathList.downloadEntryTaskData +
            `?attachmentId=${this.checkTaskModel.input.id}`;
        }

        this.downloadSolutionURL =
          RequestPathList.downloadSolution +
          `?attachmentId=${this.checkTaskModel.id}`;
      });
  }

  public setRequirementValue(reqValue, req) {
    const requirementList = this.checkTaskModel.requirementList.map(
      (requirement) => {
        if (requirement.id === req.id) {
          requirement.status = reqValue;
        }
        return requirement;
      }
    );
    this.checkTaskBaseService
      .postRateTask(
        {
          ...this.checkTaskModel,
          requirementList: requirementList,
        },
        this.currentStudentId
      )
      .pipe(
        mergeMap(() => {
          return this.checkTaskBaseService.getTask(
            this.currentTaskId,
            this.currentStudentId
          );
        })
      )
      .subscribe((taskData) => {
        this.checkTaskModel.fillModel(taskData);

        if (this.checkTaskModel.input) {
          this.downloadEntryURL =
            RequestPathList.downloadEntryTaskData +
            `?attachmentId=${this.checkTaskModel.input.id}`;
        }

        this.downloadSolutionURL =
          RequestPathList.downloadSolution +
          `?attachmentId=${this.checkTaskModel.id}`;
      });
  }
}
