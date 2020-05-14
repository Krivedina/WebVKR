export class TaskViewModel {
  public name: string;
  public deadline: string;
  public currentScore: string;
  public maxScore: string;
  public status: boolean;
  public descriptionText: string;
  public requirementList: any;

  public fillModel(
    data = {
      name: "Энтропия",
      deadline: "01.01.2020",
      currentScore: 2,
      maxScore: 6,
      status: false,
      descriptionText: "Кумамон - медведь",
      requirementList: [
        {
          status: true,
          text: "Решить задачу",
        },
        {
          status: false,
          text: "По памяти O(n)",
        },
        {
          status: false,
          text: "По времени O(n)",
        },
      ],
    }
  ) {
    for (let element in data) {
      if (element !== undefined) {
        this[element] = data[element];
      }
    }
  }
}
