import { Routes, RouterModule } from "@angular/router";
import { StudentListComponent } from "./admin-part/student-list/components/student-list.components";
import {
  AdminGuard,
  AuthicationGuard,
  StudentGuard,
  NonAuthicationGuard,
} from "./global-part/authentication/data/guard-list";
import { ProfileComponent } from "./global-part/profile/components/profile.component";
import { RegistrationComponent } from "./global-part/registration/components/registration.component";
import { LoginComponent } from "./global-part/login/components/login.component";
import { CourseListComponent } from "./student-part/course-list/component/course-list.component";
import { TaskComponent } from "./student-part/task/component/task.component";
import { EditTaskComponent } from "./admin-part/edit-task/components/edit-task.component";
import { EditCourseComponent } from "./admin-part/edit-course/component/edit-course.component";
import { NotFoundPageComponent } from "./global-part/http/not-found-page/not-found-page.component";
import { NgModule } from "@angular/core";
import { UserListComponent } from "./global-part/user-list/components/user-list.component";
import { StudentResultComponent } from "./global-part/student-result/component/student-result.component";

const routers: Routes = [
  {
    path: "",
    redirectTo: "/profile",
    pathMatch: "full",
  },
  {
    path: "student-list",
    component: StudentListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthicationGuard],
  },
  {
    path: "registration",
    component: RegistrationComponent,
    // canActivate: [AdminGuard],
  },
  {
    path: "login",
    component: LoginComponent,
    // canActivate: [AdminGuard],
  },
  {
    path: "course-list",
    component: CourseListComponent,
    canActivate: [StudentGuard],
  },
  {
    path: "course-list/:taskName/:taskId",
    component: TaskComponent,
    canActivate: [StudentGuard],
  },
  {
    path: "edit-course/:taskName/:id",
    component: EditTaskComponent,
    canActivate: [AdminGuard],
  },
  {
    path: "edit-course",
    component: EditCourseComponent,
    canActivate: [AdminGuard],
  },
  {
    path: "user-list",
    component: UserListComponent,
    canActivate: [AuthicationGuard],
  },
  {
    path: "student-result",
    component: StudentResultComponent,
    canActivate: [AdminGuard],
  },
  {
    path: "course-list/user/:name/:userId",
    component: CourseListComponent,
    canActivate: [AuthicationGuard],
  },
  {
    path: "course-list/user/:name/:userId/:courseName/:taskId",
    component: TaskComponent,
    canActivate: [AuthicationGuard],
  },
  {
    path: "profile/user/:name/:userId",
    component: ProfileComponent,
    canActivate: [AuthicationGuard],
  },
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
