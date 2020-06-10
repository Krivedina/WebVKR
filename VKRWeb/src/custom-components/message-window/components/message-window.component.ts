import { Component, Input } from "@angular/core";
import { style, trigger, transition, animate } from "@angular/animations";

@Component({
  selector: "message-window",
  templateUrl: "./message-window.html",
  styleUrls: ["./message-window.scss"],
})
export class MessageWindowComponent {
  @Input()
  message: string;

  @Input()
  success: boolean;
}
