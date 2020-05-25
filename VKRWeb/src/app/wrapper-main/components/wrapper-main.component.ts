import {
  Component,
  ViewContainerRef,
  ViewChild,
  AfterViewChecked,
  AfterViewInit,
} from "@angular/core";
import { WrapperMainBaseService } from "src/app/wrapper-main/wrapper-main.base.service";

@Component({
  selector: "wrapper-main",
  templateUrl: "./wrapper-main.html",
})
export class WrapperMainComponent implements AfterViewInit {
  @ViewChild("alertContainer", { static: false, read: ViewContainerRef })
  container;

  constructor(private WrapperMainBaseService: WrapperMainBaseService) {}
  public ngAfterViewInit(): void {
    this.WrapperMainBaseService.container = this.container;
  }
}
