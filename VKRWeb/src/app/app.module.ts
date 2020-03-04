import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { RegistrationModule } from "src/app/registration/registration.module";
import { AppComponent } from "./app.component";
import { AppRouterModule } from "./app.router";
import { LoginModule } from "./login/login.module";
import { StudentListModule } from './student-list/student-list.module';
import { HeaderModule } from './layout/header.module';
import { DirectiveModule } from './directives/directive.module';
import { HttpModule } from './http/http.module';
import { TaskListModule } from './task-list/task-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRouterModule,
    BrowserModule,
    RegistrationModule,
    LoginModule,
    StudentListModule,
    HeaderModule,
    DirectiveModule,
    HttpModule,
    TaskListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
