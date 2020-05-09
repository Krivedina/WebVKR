import {
  Component,
  ViewChild,
  ElementRef,
  HostListener,
  ComponentFactoryResolver,
  ViewContainerRef,
} from "@angular/core";
import { RequirementTextComponent } from "src/custom-components/requirement-text/components/requirement-text";

@Component({
  selector: "edit-task",
  templateUrl: "./edit-task.html",
  styleUrls: ["./edit-task.scss"],
})
export class EditTaskComponent {
  public isEditTitle = false;
  public isEditDeadline = false;
  public requirementsList = [];

  @ViewChild("requirementsTextArea") requirementsTextArea: ElementRef;
  @ViewChild(RequirementTextComponent) requirementTextComponent;
  // @ViewChild("requirementsContent", { read: ViewContainerRef })
  // requirementsContent;

  @ViewChild("editTitleWindow") editTitleWindow: ElementRef;
  @ViewChild("editTitleButton") editTitleButton: ElementRef;

  @ViewChild("editDeadlineWindow") editDeadlineWindow: ElementRef;
  @ViewChild("editDeadlineButton") editDeadlineButton: ElementRef;

  @HostListener("click", ["$event"]) onClick(e: MouseEvent) {
    if (
      !this.editTitleWindow.nativeElement.contains(e.target) &&
      !this.editTitleButton.nativeElement.contains(e.target)
    ) {
      this.isEditTitle = false;
    }
    if (
      !this.editDeadlineWindow.nativeElement.contains(e.target) &&
      !this.editDeadlineButton.nativeElement.contains(e.target)
    ) {
      this.isEditDeadline = false;
    }
  }

  public addRequirements() {
    this.requirementsList.push({
      text: this.requirementsTextArea.nativeElement.value,
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

  public deleteRequirement(requirement: string) {
    this.requirementsList = this.requirementsList.filter(
      (element) => element.text !== requirement
    );
  }

  public getFileName() {
    let file = (<HTMLInputElement>document.getElementById("uploaded-file"))
      .value;
    file = file.replace(/\\/g, "/").split("/").pop();
    document.getElementById("file-name").innerHTML = "Имя файла: " + file;
  }
}
