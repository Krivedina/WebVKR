import {
  Component,
  ViewChild,
  ElementRef,
  HostListener,
  OnInit,
} from "@angular/core";
import { RequirementTextComponent } from "src/custom-components/requirement-text/components/requirement-text.component";
import { EditTaskViewModel } from "../view-models/edit-task.view-model";

@Component({
  selector: "edit-task",
  templateUrl: "./edit-task.html",
  styleUrls: ["./edit-task.scss"],
})
export class EditTaskComponent implements OnInit {
  public isEditTitle = false;
  public isEditDeadline = false;
  public isEditDescription = false;

  public modelEditTask: EditTaskViewModel = new EditTaskViewModel();

  public ngOnInit(): void {
    this.modelEditTask.fillModel();
  }

  @ViewChild(RequirementTextComponent) requirementTextComponent: ElementRef;
  @ViewChild("requirementsTextArea") requirementsTextArea: ElementRef;
  @ViewChild("descriptionTextarea") descriptionTextarea: ElementRef;

  @ViewChild("editTitleWrapper") editTitleWrapper: ElementRef;
  @ViewChild("editTitleWindow") editTitleWindow: ElementRef;

  @ViewChild("editDeadlineWindow") editDeadlineWindow: ElementRef;
  @ViewChild("editDeadlineButton") editDeadlineButton: ElementRef;

  @HostListener("click", ["$event"]) onClick(e: any) {
    if (e.target.className.match("edit-block-wrapper")) {
      this.isEditTitle = false;
      this.isEditDeadline = false;
    }
  }

  public addRequirements() {
    this.modelEditTask.requirementsList.push({
      text:
        this.requirementsTextArea.nativeElement.value ||
        "Пустое требование" + Math.random().toFixed(3),
      status: false,
    });
    this.requirementsTextArea.nativeElement.value = "";
  }

  public editTitle() {
    this.isEditTitle = !this.isEditTitle;
  }

  public editDeadline() {
    this.isEditDeadline = !this.isEditDeadline;
  }

  public editDescription() {
    this.isEditDescription = true;
    this.descriptionTextarea.nativeElement.value = this.modelEditTask.descriptionText;
  }

  public saveDescription() {
    this.isEditDescription = false;
    this.modelEditTask.descriptionText = this.descriptionTextarea.nativeElement.value;
  }

  public deleteRequirement(requirement: string) {
    this.modelEditTask.requirementsList = this.modelEditTask.requirementsList.filter(
      (element) => element.text !== requirement
    );
  }

  public changeTitle(newTitle: string) {
    this.modelEditTask.title = newTitle;
    this.isEditTitle = false;
  }

  public changeDeadline(newDeadline: string) {
    this.modelEditTask.deadline = newDeadline;
    this.isEditDeadline = false;
  }

  public getFileName() {
    let file = (<HTMLInputElement>document.getElementById("uploaded-file"))
      .value;
    file = file.replace(/\\/g, "/").split("/").pop();
    document.getElementById("file-name").innerHTML = "Имя файла: " + file;
  }
}
