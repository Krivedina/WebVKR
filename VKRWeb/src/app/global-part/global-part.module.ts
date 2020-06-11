import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AuthenticationBaseService } from "./authentication/data/authentication.base.service";
import {
  AuthicationGuard,
  StudentGuard,
  AdminGuard,
} from "./authentication/data/guard-list";
import { CustomComponentsModule } from "src/custom-components/custom-components.module";

import { HttpService } from "./http/http.service";
import { NotFoundPageComponent } from "./http/not-found-page/not-found-page.component";

import { HeaderBaseService } from "./layout/data/header.base.service";
import { HeaderComponent } from "./layout/component/header.component";
import { ProfileComponent } from "./profile/components/profile.component";
import { ProfileBaseService } from "./profile/data/profile.base.service";
import { RegistrationComponent } from "./registration/components/registration.component";
import { RegistrationBaseService } from "./registration/data/registration.base.service";
import { WrapperMainComponent } from "./wrapper-main/components/wrapper-main.component";
import { WrapperMainBaseService } from "./wrapper-main/data/wrapper-main.base.service";
import { LoginComponent } from "./login/components/login.component";
import { LoginBaseService } from "./login/data/login.base.service";
import { BrowserModule } from "@angular/platform-browser";
import { UserListBaseService } from "./user-list/data/user-list.base.service";
import { UserListComponent } from "./user-list/components/user-list.component";

const components = [
  NotFoundPageComponent,
  HeaderComponent,
  ProfileComponent,
  RegistrationComponent,
  WrapperMainComponent,
  LoginComponent,
  UserListComponent,
];

@NgModule({
  declarations: components,
  exports: components,
  entryComponents: [WrapperMainComponent],
  providers: [
    AuthenticationBaseService,
    AuthicationGuard,
    AdminGuard,
    AuthenticationBaseService,
    HttpService,
    HeaderBaseService,
    LoginBaseService,
    ProfileBaseService,
    RegistrationBaseService,
    StudentGuard,
    WrapperMainBaseService,
    UserListBaseService,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomComponentsModule,
  ],
})
export class GlobalPartModule {}
