export class EditCourseViewModel {
  public courseList;

  public fillModel(
    data = {
      courseList: [
        {
          courseName: "Скрипты",
          courseMaxScore: "30",
          taskList: [
            {
              name: "Энтропия",
              deadline: "22.04.2020",
            },
            {
              name: "Шифр Цезаря",
              deadline: "29.04.2020",
            },
          ],
        },
      ],
    }
  ) {
    // for (let element in data) {
    //   if (element !== undefined) {
    //     this[element] = data[element];
    //   }
  // }
    this.courseList = data;
  }
}
