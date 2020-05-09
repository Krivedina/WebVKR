import { Injectable, OnInit } from "@angular/core";
import { HttpService } from "src/app/http/http.service";
import { RequestPathList } from 'src/app/http/routing-path-list';
import { RequestDataName } from 'src/app/http/request-data-name';
import { ProfileFormViewModel } from '../view-model/profile-form.view-model';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Injectable()
export class ProfileBaseService implements OnInit {
  
  public model: ProfileFormViewModel;
  public profileForm: FormGroup;
  public isEditProfile: boolean;

  constructor(private httpService: HttpService) {
    this.httpService.getRequest(RequestPathList.userData, RequestDataName.UserData)
    const textValidators = [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(10)
    ];
    this.profileForm = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      firstName: new FormControl("", textValidators),
      surname: new FormControl("", textValidators),
      secondName: new FormControl("", textValidators),
      group: new FormControl("", textValidators),
    });
  }

  public ngOnInit (){
    const userData = this.httpService.getCacheData(RequestDataName.UserData);
    console.log(userData);
    // this.model = new ProfileFormViewModel(userData)
  }

  public saveChanges(){
    this.isEditProfile = !this.isEditProfile;
    // this.httpService.postRequest(RequestPathList.signIn, this.profileForm.value, { withCredentials: true });
  }
}
