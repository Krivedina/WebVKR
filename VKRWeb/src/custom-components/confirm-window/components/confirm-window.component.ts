import { Component, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "confirm-window",
  templateUrl: "./confirm-window.html",
  styleUrls: ["./confirm-window.scss"],
})
export class ConfirmWindowComponent {
  public confirmMessage = "delete";

  @Input()
  inputName: string;

  @Output()
  confirmValue =  new EventEmitter<string>();


  public sendConfirmMessage(value?: string) {
    this.confirmValue.emit(value);
  }
}
