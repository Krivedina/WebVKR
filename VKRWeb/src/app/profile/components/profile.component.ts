import { Component, OnInit } from "@angular/core";
import { ProfileBaseService } from "../data/profile.base.service";
import { ProfileFormViewModel } from "../view-model/profile-form.view-model";
import { Validators, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "profile",
  templateUrl: "./profile.html",
  styleUrls: ["./profile.scss"],
})
export class ProfileComponent implements OnInit {
  public isEditProfile: boolean = false;
  public isEditPassword: boolean = false;
  public isProfileData: boolean = true;

  public modelProfileForm: ProfileFormViewModel = new ProfileFormViewModel();
  public profileForm: FormGroup;
  public passwordForm: FormGroup;
  private textValidators = [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(15),
  ];

  constructor(private profileBaseService: ProfileBaseService) {}

  public ngOnInit(): void {
    this.profileBaseService.getOpenUser().subscribe((userData) => {
      console.log(userData);
      // this.modelProfileForm.fillModel(userData);
    });
    this.modelProfileForm.fillModel();

    if (this.modelProfileForm.role === "Студент") {
      this.modelProfileForm.role = "Студента";
    } else if (this.modelProfileForm.role === "Преподаватель") {
      this.modelProfileForm.role = "Преподавателя";
    }
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
    this.profileForm.reset();
    this.passwordForm.reset();
  }

  public saveUserDataChanges() {
    this.isEditProfile = false;
    this.isProfileData = true;
    this.modelProfileForm.fillModel(this.profileForm.value);
    // this.httpService.postRequest(RequestPathList.signIn, this.profileForm.value, { withCredentials: true });
  }

  public savePasswordChanges() {
    this.isEditPassword = false;
    this.isProfileData = true;
  }
}
