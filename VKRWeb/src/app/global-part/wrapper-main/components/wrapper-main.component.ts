import {
  Component,
  AfterViewInit,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { WrapperMainBaseService } from "../../../global-part/wrapper-main/data/wrapper-main.base.service";

//
@Component({
  selector: "wrapper-main",
  templateUrl: "./wrapper-main.html",
  styleUrls: ["./wrapper-main.scss"],
})
export class WrapperMainComponent implements AfterViewInit {
  @ViewChild("alertContainer", { static: false, read: ViewContainerRef })
  container;

  constructor(private WrapperMainBaseService: WrapperMainBaseService) {}
  public ngAfterViewInit(): void {
    this.WrapperMainBaseService.container = this.container;
  }
}
