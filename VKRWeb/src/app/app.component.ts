import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { HttpService } from "src/app/http/http.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "VKRWeb";
  constructor(private route: Router,private httpService: HttpService) {}

  public ngOnInit() {
    
  }

}
