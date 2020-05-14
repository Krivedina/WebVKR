import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: "edit-window",
  templateUrl: "./edit-window.html",
  styleUrls: ["./edit-window.scss"],
})
export class EditWindowComponent {
  public editGroup = new FormGroup({
    currentInput: new FormControl(),
  });
  
  @Input()
  inputName: string;

  @Input()
  buttonName: string;

  @Output()
  inputValue = new EventEmitter<string>();

  public getInputValue() {
    this.inputValue.emit(this.editGroup.value.currentInput);
  }
}
