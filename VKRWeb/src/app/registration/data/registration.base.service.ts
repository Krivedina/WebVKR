import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/http/http.service';

@Injectable()
export class RegistrationBaseService {
  public registrationForm: FormGroup;

  constructor(private httpService: HttpService) {
    const textValidators = [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(10)
    ];
    this.registrationForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      name: new FormControl("", textValidators),
      surename: new FormControl("", textValidators),
      second_name: new FormControl("", textValidators),
      password: new FormControl("", textValidators),
      password_confirm: new FormControl("", textValidators),
      group: new FormControl("", textValidators)
    });
    
  }

  public registrationRequest() {
    const data = {
      surename: 'loh',
      firstname: 'many',
      secondname: 'Vlados',
      email: 'qwerty@lul.cum',
      password: 'aza',
      group: 'koen-4_nol`_2'
  }
  //a50a7385-2a5d-4fcc-b83f-956479b3fbea
  
    this.httpService.signUp(data);
  }
}
