export class EditCourseViewModel {
  public courseList;

  public fillModel(
    data = [
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
    ]
  ) {
    this.courseList = data.map((course) => {
      if (course.taskList) {
        course.taskList = course.taskList.map((task) => {
          return { isDeleteTask: false, ...task };
        });
      }
      return {
        isOpenView: false,
        isEditCourse: false,
        isDeleteCourse: false,
        ...course,
      };
    });
  }
}
