export class EditCourseViewModel {
  public courseList;

  public fillModel(
    data = [
      {
        descriptionText: "2131",
        name: "Скрипты",
        maxScore: "30",
        courseTasks: [
          {
            name: "Энтропия",
            deadline: "22.04.2020",
            maxScore: 12,
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
      let maxScore = 0;
      if (course.courseTasks) {
        course.courseTasks = course.courseTasks.map((task) => {
          maxScore += +task.maxScore;
          return { isDeleteTask: false, ...task };
        });
      }
      course.maxScore = maxScore.toString();
      return {
        isOpenView: false,
        isEditCourse: false,
        isDeleteCourse: false,
        isEditDescription: false,
        ...course,
      };
    });
  }
}
