export class EditTaskViewModel {
  public requirementsList;
  public descriptionText: string;
  public title: string;
  public deadline: string;

  public fillModel(
    data = {
      requirementsList: [
        {
          text: "Решить задачу",
          status: false,
        },
      ],
      descriptionText: "Условие задачи",
      title: "Назавание задачи",
      deadline: "01.01.2020",
    }
  ) {
    for (let element in data) {
      if (element !== undefined) {
        this[element] = data[element];
      }
    }
  }
}
