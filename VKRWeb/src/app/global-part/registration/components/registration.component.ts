import { Component, OnInit } from "@angular/core";
import { RegistrationBaseService } from "../data/registration.base.service";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { MD5 } from "../data/md5";
import { RoleEnum } from "static/role.enum";

@Component({
  selector: "registration",
  templateUrl: "./registration.html",
  styleUrls: ["./registration.scss"],
})
export class RegistrationComponent implements OnInit {
  public registrationForm: FormGroup;
  public capcha: any;
  public textValidators = [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(10),
  ];

  constructor(private registrationBaseService: RegistrationBaseService) {}
  public ngOnInit() {
    this.capcha = this.createCapcha();
    this.registrationForm = new FormGroup({
      email: new FormControl("azakov31@gmail.com", [
        Validators.required,
        Validators.email,
      ]),
      firstName: new FormControl("Иван", this.textValidators),
      surname: new FormControl("Иванович", this.textValidators),
      secondName: new FormControl("Зарубин", this.textValidators),
      password: new FormControl("12345", this.textValidators),
      passwordConfirm: new FormControl("12345", this.textValidators),
      group: new FormControl("КН-402", this.textValidators),
      capcha: new FormControl(""),
      student: new FormControl(null),
      admin: new FormControl(null),
    });
  }

  public registation() {
    const capchaCheck =
      MD5(this.registrationForm.value.capcha) === this.capcha.result;
    const passwordConfirm =
      this.registrationForm.value.password ===
      this.registrationForm.value.passwordConfirm;
    const isRole =
      this.registrationForm.value.admin && this.registrationForm.value.student;

    if (capchaCheck && passwordConfirm && !isRole) {
      const role = this.registrationForm.value.admin
        ? RoleEnum.admin
        : RoleEnum.student;
      const sendRegistrationData = {
        role: role,
        email: this.registrationForm.value.email,
        firstName: this.registrationForm.value.firstName,
        group: this.registrationForm.value.group,
        password: this.registrationForm.value.password,
        surname: this.registrationForm.value.surname,
        secondName: this.registrationForm.value.secondName,
      };
      this.registrationBaseService.registrationRequest(sendRegistrationData);
    } else {
      this.registrationBaseService.showFail("Ошибка в заполнении данных!");
    }
  }

  private createCapcha() {
    const a = this.randomNumber(1, 100);
    const b = this.randomNumber(1, 100);
    const result = MD5("" + (a + b));
    return {
      a: a,
      b: b,
      result: result,
    };
  }

  private randomNumber(min: number, max: number) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }
}
