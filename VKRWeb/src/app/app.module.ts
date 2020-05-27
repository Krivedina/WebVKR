import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AdminPartModule } from "./admin-part/admin-part.module";
import { GlobalPartModule } from "./global-part/global-part.module";
import {
  AuthicationGuard,
  StudentGuard,
  AdminGuard,
} from "./global-part/authentication/data/guard-list";
import { StudentPartModule } from './student-part/student-part.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app.router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AdminPartModule,
    GlobalPartModule,
    StudentPartModule,
    AppRouterModule,
    BrowserModule,
  ],
  providers: [AuthicationGuard, StudentGuard, AdminGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
