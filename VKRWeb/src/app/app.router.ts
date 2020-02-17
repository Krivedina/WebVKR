import { Routes, RouterModule } from "@angular/router";
import { RegistrationComponent } from "src/app/registration/components/registration.component";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/components/login.component";
import { ProfileComponent } from "./profile/components/profile.component";
import { StudentListComponent } from "./student-list/components/student-list.components";

const routers: Routes = [
  {
    path: "",
    redirectTo: "/student-list",
    pathMatch: 'full'
  },
  {
    path: "student-list",
    component: StudentListComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "registration",
    component: RegistrationComponent
  },
  {
    path: "login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule]
})
export class AppRouterModule {}
