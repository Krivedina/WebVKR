import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRouterModule } from "./app.router";

import { RegistrationModule } from "./../app/registration/registration.module";
import { LoginModule } from "./login/login.module";
import { StudentListModule } from "./student-list/student-list.module";
import { HeaderModule } from "./layout/header.module";
import { HttpModule } from "./http/http.module";
import { TaskListModule } from "./task-list/task-list.module";
import { CourseListModule } from "./course-list/course-list.module";
import { EditCourseModule } from "./edit-course/edit-course.module";
import { AuthenticationModule } from "./authentication/authentication.module";
import { WrapperMainModule } from "./wrapper-main/wrapper-main.module";
import { AuthicationGuard, StudentGuard, AdminGuard } from './authentication/data/checkAuthication';
import { ProfileModule } from './profile/profile.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    WrapperMainModule,
    AppRouterModule,
    BrowserModule,
    RegistrationModule,
    LoginModule,
    StudentListModule,
    HeaderModule,
    HttpModule,
    TaskListModule,
    CourseListModule,
    EditCourseModule,
    AuthenticationModule,
    ProfileModule,
  ],
  providers: [AuthicationGuard, StudentGuard, AdminGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
