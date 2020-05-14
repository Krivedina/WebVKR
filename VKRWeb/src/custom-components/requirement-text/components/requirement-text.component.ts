import { Component, Input, Output, EventEmitter } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "requirement-text",
  templateUrl: "./requirement-text.html",
  styleUrls: ["./requirement-text.scss"],
  animations: [
    trigger("fadeInOut", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 })),
      ]),
      transition(":leave", [animate(500, style({ opacity: 0 }))]),
    ]),
  ],
})
export class RequirementTextComponent {
  @Output()
  deleteElement = new EventEmitter<string>();

  @Input()
  public requirement: string;

  @Input()
  public status: boolean;

  public deleteLog() {
    this.deleteElement.emit(this.requirement);
  }
}
