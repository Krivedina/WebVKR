import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({ 
  selector: "create-window",
  templateUrl: "./create-window.html",
  styleUrls: ["./create-window.scss"],
})
export class CreateWindowComponent {
  public createWindowGroup = new FormGroup({
    firstTitle: new FormControl(),
    secondTitle: new FormControl(),
  });

  @Input()
  firstTitle: string;

  @Input()
  secondTitle: string;

  @Input()
  buttonName: string;

  @Output()
  inputValue = new EventEmitter<string>();

  public getInputValue() {
    this.inputValue.emit(this.createWindowGroup.value);
  }
}
