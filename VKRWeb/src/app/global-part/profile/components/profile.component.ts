import { Component, OnInit } from "@angular/core";
import { ProfileBaseService } from "../data/profile.base.service";
import { ProfileFormViewModel } from "../view-model/profile-form.view-model";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { WrapperMainBaseService } from "../../wrapper-main/data/wrapper-main.base.service";
import { AuthenticationBaseService } from "../../authentication/data/authentication.base.service";
import { RoleEnum } from "static/role.enum";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { mergeMap } from "rxjs/operators";

@Component({
  selector: "profile",
  templateUrl: "./profile.html",
  styleUrls: ["./profile.scss"],
})
export class ProfileComponent implements OnInit {
  public isLoadingProfileData: boolean = false;
  public isEditProfile: boolean = false;
  public isEditPassword: boolean = false;
  public isProfileData: boolean = true;
  public isAnoutherUser: boolean = false;

  public modelProfileForm: ProfileFormViewModel = new ProfileFormViewModel();
  public profileForm: FormGroup;
  public passwordForm: FormGroup;
  private textValidators = [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(15),
  ];

  constructor(
    private profileBaseService: ProfileBaseService,
    private wrapperMainBaseService: WrapperMainBaseService,
    private authenticationBaseService: AuthenticationBaseService,
    private activatedRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.isLoadingProfileData = true;
    this.loadProfile();
    // this.modelProfileForm.fillModel();
  }

  public loadProfile() {
    this.activatedRoute.paramMap
      .pipe(
        mergeMap((params: ParamMap) => {
          const userId = params.get("userId") || null;
          if (userId) {
            this.isAnoutherUser = true;
          }
          return this.profileBaseService.getOpenUser(false, userId);
        })
      )
      .subscribe((userData) => {
        console.log(userData);
        this.modelProfileForm.fillModel(userData);
        if (
          this.authenticationBaseService.getIsAuthenticated().role ===
          RoleEnum.student
        ) {
          this.modelProfileForm.role = "Студента";
        } else if (
          this.authenticationBaseService.getIsAuthenticated().role ===
          RoleEnum.admin
        ) {
          this.modelProfileForm.role = "Преподавателя";
        }
        this.isLoadingProfileData = false;
      });
  }

  public editProfile() {
    this.isEditProfile = !this.isEditProfile;
    this.isProfileData = false;
    this.profileForm = new FormGroup({
      email: new FormControl(this.modelProfileForm.email, [
        Validators.required,
        Validators.email,
      ]),
      firstName: new FormControl(
        this.modelProfileForm.firstName,
        this.textValidators
      ),
      surname: new FormControl(
        this.modelProfileForm.surname,
        this.textValidators
      ),
      secondName: new FormControl(
        this.modelProfileForm.secondName,
        this.textValidators
      ),
      group: new FormControl(this.modelProfileForm.group, this.textValidators),
    });
  }

  public editPassword() {
    this.isEditPassword = !this.isEditPassword;
    this.isProfileData = false;
    this.passwordForm = new FormGroup({
      currentPassword: new FormControl(),
      newPassword: new FormControl(),
      newPasswordConfirm: new FormControl(),
    });
  }

  public cancelChanges() {
    this.isEditProfile = false;
    this.isEditPassword = false;
    this.isProfileData = true;
    if (this.profileForm) {
      this.profileForm.reset();
    }
    if (this.passwordForm) {
      this.passwordForm.reset();
    }
  }

  public saveUserDataChanges() {
    this.isEditProfile = false;
    this.isProfileData = true;
    this.profileBaseService.postSaveUser(this.profileForm.value).subscribe(
      () => {
        this.loadProfile();
        this.authenticationBaseService.checkAuthentication();
        this.wrapperMainBaseService.showMessage(
          "Данные успешно изменены",
          true
        );
      },
      (error) => {
        this.wrapperMainBaseService.showMessage(
          "Изменить данные не удалось!",
          false
        );
      }
    );
  }

  public savePasswordChanges() {
    this.isEditPassword = false;
    this.isProfileData = true;
    if (
      this.passwordForm.value.newPassword ===
      this.passwordForm.value.newPasswordConfirm
    ) {
      const userPasswordData = {
        current: this.passwordForm.value.currentPassword,
        new: this.passwordForm.value.newPassword,
      };
      this.profileBaseService.postChangePassword(userPasswordData).subscribe(
        () => {
          this.wrapperMainBaseService.showMessage(
            "Пароль успешно изменен",
            true
          );
        },
        (error) => {
          this.wrapperMainBaseService.showMessage(
            "Изменить пароль не удалось!",
            false
          );
        }
      );
    }
  }
}
