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
    pathMatch: "full"
  },
  {
    path: "student-list",
    loadChildren: () =>
      import("./student-list/components/student-list.components").then(
        file => file.StudentListComponent
      )
    // component: StudentListComponent
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./profile/components/profile.component").then(
        file => file.ProfileComponent
      )
    // component: ProfileComponent
  },
  {
    path: "registration",
    loadChildren: () =>
      import("./registration/components/registration.component").then(
        file => file.RegistrationComponent
      )
    // component: RegistrationComponent
  },
  {
    path: "login",
    loadChildren: () =>
    import("./login/components/login.component").then(
      file => file.LoginComponent
    )
    // component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule]
})
export class AppRouterModule {}
