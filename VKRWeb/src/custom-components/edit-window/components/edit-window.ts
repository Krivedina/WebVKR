import { Component, Input } from "@angular/core";

@Component({
    selector: "edit-window",
    templateUrl: "./edit-window.html",
    styleUrls: ["./edit-window.scss"],
})
export class EditWindowComponent{

    @Input()
    inputName: string;

    @Input()
    buttonName: string;
}