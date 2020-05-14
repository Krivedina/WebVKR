export class EditCourseViewModel {
  public courseList;

  public fillModel(
    data = {
      courseList: [
        {
          courseName: "Скрипты",
          courseMaxScore: "30",
          taskList: [],
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
