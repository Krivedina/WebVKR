import {
  Component,
  ViewChild,
  ElementRef,
  HostListener,
  OnInit,
} from "@angular/core";
import { RequirementTextComponent } from "src/custom-components/requirement-text/components/requirement-text.component";
import { EditTaskViewModel } from "../view-models/edit-task.view-model";
import { EditTaskBaseService } from "../data/edit-task.base.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { mergeMap } from "rxjs/operators";
import { FormGroup, FormControl } from "@angular/forms";
import { WrapperMainBaseService } from "src/app/global-part/wrapper-main/data/wrapper-main.base.service";
import { RequestPathList } from "src/app/global-part/http/routing-path-list";

@Component({
  selector: "edit-task",
  templateUrl: "./edit-task.html",
  styleUrls: ["./edit-task.scss"],
})
export class EditTaskComponent implements OnInit {
  public isEditTitle = false;
  public isEditDeadline = false;
  public isEditDescription = false;
  public isEditMaxScore = false;
  public isDeleteRequirement = false;
  public isLoadingTaskPage = false;

  public uploadFileName: string;
  public uploadEntryFormData = new FormData();
  public currentRequirement: any;
  public downloadEntryURL: any;

  public uploadEntryFrom: FormGroup = new FormGroup({
    file: new FormControl(),
  });

  public modelEditTask: EditTaskViewModel = new EditTaskViewModel();

  @ViewChild(RequirementTextComponent) requirementTextComponent: ElementRef;
  @ViewChild("requirementsTextArea") requirementsTextArea: ElementRef;
  @ViewChild("descriptionTextarea") descriptionTextarea: ElementRef;

  @HostListener("click", ["$event"]) onClick(e: any) {
    if (e.target.className.match("edit-block-wrapper")) {
      this.isEditTitle = false;
      this.isEditDeadline = false;
      this.isEditMaxScore = false;
      if (this.currentRequirement) {
        this.currentRequirement.isDeleteRequirement = false;
      }
    }
  }

  constructor(
    private editTaskBaseService: EditTaskBaseService,
    private route: ActivatedRoute,
    private wrapperMainBaseService: WrapperMainBaseService
  ) {}

  public ngOnInit(): void {
    this.isLoadingTaskPage = true;
    this.route.paramMap
      .pipe(
        mergeMap((params: ParamMap) => {
          const id = params.get("id");
          return this.editTaskBaseService.getTask(id);
        })
      )
      .subscribe((taskData) => {
        this.modelEditTask.fillModel(taskData);
        this.isLoadingTaskPage = false;
        if (this.modelEditTask.input.id) {
          this.downloadEntryURL =
            RequestPathList.downloadEntryTaskData +
            `?attachmentId=${this.modelEditTask.input.id}`;
        }
      });
  }

  public modalEditTitle() {
    this.isEditTitle = !this.isEditTitle;
  }

  public modalEditDeadline() {
    this.isEditDeadline = !this.isEditDeadline;
  }

  public modalEditMaxScore() {
    this.isEditMaxScore = !this.isEditMaxScore;
  }

  public modalDeleteRequirement(requirementData) {
    this.currentRequirement = requirementData;
    this.currentRequirement.isDeleteRequirement = !this.currentRequirement
      .isDeleteRequirement;
  }

  public editDescription() {
    this.isEditDescription = true;
    if (this.descriptionTextarea.nativeElement) {
      this.descriptionTextarea.nativeElement.value = this.modelEditTask.descriptionText;
    }
  }

  public saveDescription() {
    this.saveTask({
      ...this.modelEditTask,
      descriptionText: this.descriptionTextarea.nativeElement.value,
    })
      .pipe(
        mergeMap(() => {
          return this.fillTaskPage(false);
        })
      )
      .subscribe(
        (taskData) => {
          this.modelEditTask.fillModel(taskData);
          this.wrapperMainBaseService.showMessage("Описание сохранено", true);
        },
        (error) => {
          this.wrapperMainBaseService.showMessage(
            "Описание не удалось сохранить",
            false
          );
        }
      );
    this.isEditDescription = false;
  }

  public addRequirements() {
    if (!this.modelEditTask.requirementList) {
      this.modelEditTask.requirementList = [];
    }
    const reqList = this.modelEditTask.requirementList;
    reqList.push({
      text: this.requirementsTextArea.nativeElement.value,
      status: false,
    });
    this.saveTask({
      ...this.modelEditTask,
      requirementList: reqList,
    })
      .pipe(
        mergeMap(() => {
          return this.fillTaskPage(false);
        })
      )
      .subscribe(
        (taskData) => {
          this.modelEditTask.fillModel(taskData);
          this.wrapperMainBaseService.showMessage("Требование добавлено", true);
        },
        (error) => {
          this.wrapperMainBaseService.showMessage(
            "Требование не удалось добавить",
            false
          );
        }
      );
    this.requirementsTextArea.nativeElement.value = "";
  }

  public deleteRequirement() {
    const reqList = this.modelEditTask.requirementList.filter(
      (elementRequirementList) =>
        elementRequirementList.id !== this.currentRequirement.id
    );
    this.saveTask({ ...this.modelEditTask, requirementList: reqList })
      .pipe(
        mergeMap(() => {
          return this.fillTaskPage(false);
        })
      )
      .subscribe(
        (taskData) => {
          this.modelEditTask.fillModel(taskData);
          this.wrapperMainBaseService.showMessage("Требование удалено", true);
        },
        (error) => {
          this.wrapperMainBaseService.showMessage(
            "Требование не удалось удалить",
            false
          );
        }
      );
    this.isDeleteRequirement = false;
  }

  public changeTitle(newTitle: string) {
    this.saveTask({ ...this.modelEditTask, name: newTitle })
      .pipe(
        mergeMap(() => {
          return this.fillTaskPage(false);
        })
      )
      .subscribe(
        (taskData) => {
          this.modelEditTask.fillModel(taskData);
          this.wrapperMainBaseService.showMessage("Название изменено", true);
        },
        (error) => {
          this.wrapperMainBaseService.showMessage(
            "Название не удалось изменить",
            false
          );
        }
      );
    this.isEditTitle = false;
  }

  public changeDeadline(newDeadline: string) {
    this.saveTask({ ...this.modelEditTask, deadline: newDeadline })
      .pipe(
        mergeMap(() => {
          return this.fillTaskPage(false);
        })
      )
      .subscribe(
        (taskData) => {
          this.modelEditTask.fillModel(taskData);
          this.wrapperMainBaseService.showMessage("Дедлайн изменен", true);
        },
        (error) => {
          this.wrapperMainBaseService.showMessage(
            "Дедлайн не удалось изменить",
            false
          );
        }
      );
    this.isEditDeadline = false;
  }

  public changeMaxScore(maxScore: string) {
    this.saveTask({ ...this.modelEditTask, maxScore: +maxScore })
      .pipe(
        mergeMap(() => {
          return this.fillTaskPage(false);
        })
      )
      .subscribe(
        (taskData) => {
          this.modelEditTask.fillModel(taskData);
          this.wrapperMainBaseService.showMessage(
            "Оценка за задчу изменена",
            true
          );
        },
        (error) => {
          this.wrapperMainBaseService.showMessage(
            "Оценку за здачу не удалось изменить",
            false
          );
        }
      );
    this.isEditMaxScore = false;
  }

  public getFileName(event) {
    this.uploadFileName =
      "Имя файла: " +
      this.uploadEntryFrom.value.file.replace(/\\/g, "/").split("/").pop();
    this.uploadEntryFormData.append(
      "file",
      event.target.files[0],
      this.uploadEntryFrom.value.file.replace(/\\/g, "/").split("/").pop()
    );
  }

  public uploadSolution() {
    this.editTaskBaseService
      .postUploadSolution(this.uploadEntryFormData, this.modelEditTask.id)
      .pipe(
        mergeMap(() => {
          return this.fillTaskPage(false);
        })
      )
      .subscribe(
        (taskData) => {
          console.log(taskData);
          this.modelEditTask.fillModel(taskData);
          if (this.modelEditTask.input.id) {
            this.downloadEntryURL =
              RequestPathList.downloadEntryTaskData +
              `?attachmentId=${this.modelEditTask.input.id}`;
          }
          this.uploadFileName = null;
          this.wrapperMainBaseService.showMessage(
            "Входные данные загружены",
            true
          );
        },
        (error) => {
          this.wrapperMainBaseService.showMessage(
            "Входные данные загрузить не удалось",
            false
          );
        }
      );
    this.uploadEntryFormData.delete("file");
  }

  private saveTask(taskData) {
    return this.editTaskBaseService.postSaveTask(taskData);
  }

  private fillTaskPage(flag = true) {
    return this.editTaskBaseService.getTask(this.modelEditTask.id, flag);
    
  }
}
