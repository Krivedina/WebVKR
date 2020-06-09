export class EditTaskViewModel {
  public requirementList;
  public descriptionText: string;
  public name: string;
  public deadline: string;
  public input: any;
  public maxScore: any;
  public id: any;

  public fillModel(
    data = {
      requirementList: [
        {
          text: "Решить задачу",
          status: false,
        },
      ],
      descriptionText: "Условие задачи",
      name: "Назавание задачи",
      deadline: "01.01.2020",
    }
  ) {
    for (let element in data) {
      if (element !== undefined) {
        if ((element === "requirementList") && data[element]) {
          data[element] = data[element].map((requirement) => {
            return { ...requirement, isDeleteRequirement: false };
          });
        }
        this[element] = data[element];
      }
    }
  }
}
