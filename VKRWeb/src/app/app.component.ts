import { Component } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "VKRWeb";
  constructor(private route: Router) {
    // console.log(this.route.url);
    // this.route.events.subscribe(e => console.log(e));
  }
}
