import { Routes, RouterModule } from "@angular/router";
import { RegistrationComponent } from "src/app/registration/components/registration.component";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/components/login.component";
import { ProfileComponent } from "./profile/components/profile.component";
import { StudentListComponent } from "./student-list/components/student-list.components";
import { NotFoundPageComponent } from "./http/not-found-page/not-found-page.component";
import { CourseListComponent } from "./course-list/component/course-list.component";
import { TaskComponent } from "./task/component/task.component";
import { EditTaskComponent } from "./edit-task/components/edit-task.component";
import { EditCourseComponent } from "./edit-course/component/edit-course.component";

const routers: Routes = [
  {
    path: "",
    redirectTo: "/profile",
    pathMatch: "full",
  },
  {
    path: "student-list",
    component: StudentListComponent,
  },
  {
    path: "profile",
    component: ProfileComponent,
  },
  {
    path: "registration",
    component: RegistrationComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "course-list",
    component: CourseListComponent,
  },
  { path: "course-list/:courseName/:taskName", component: TaskComponent },
  { path: "edit-task", component: EditTaskComponent },
  { path: "edit-course", component: EditCourseComponent },
  {
    path: "**",
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule],
})
export class AppRouterModule {}
