import { Component, Input } from "@angular/core";
import { style, trigger, transition, animate } from '@angular/animations';

@Component({
  selector: "message-window",
  templateUrl: "./message-window.html",
  styleUrls: ["./message-window.scss"],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate(500, style({ opacity: 0 }))
      ])
    ])
  ],
})
export class MessageWindowComponent {
  @Input()
  message: string;

  @Input()
  succsess: boolean
}
