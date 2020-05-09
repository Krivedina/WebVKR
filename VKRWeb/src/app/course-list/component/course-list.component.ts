import { Component } from "@angular/core";
import { trigger, state, style } from '@angular/animations';

@Component({
  selector: "course-list",
  templateUrl: "./course-list.html",
  styleUrls: ["./course-list.scss"],
//   animations: [
//     trigger("myAnimationTrigger", [
//        state('collapsed', style({ 
//           height: '0px', 
//        })),
//        state('expanded', style({ 
//           height: '*', 
//        }))
//     ])
//  ]
})
export class CourseListComponent {
  public isOpen: boolean = false;

  public openCourse() {
    this.isOpen = !this.isOpen
  }
}
