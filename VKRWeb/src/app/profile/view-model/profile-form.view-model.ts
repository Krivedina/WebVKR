export class ProfileFormViewModel {
  public email: string;
  public firstName: string;
  public surname: string;
  public secondName: string;
  public passsword: string;
  public group: string;

  public fillModel(
    data = {
      email: "pochta@email.com",
      firstName: "Имя",
      surname: "Фамилия",
      secondName: "Отчество",
      passsword: "Пароль",
      group: "Группа",
    }
  ) {
    for (let element in data) {
      if (element !== undefined) {
        this[element] = data[element];
      }
    }
  }
}
