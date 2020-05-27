export class CourseListFormViewModel {
  public courseList;

  public fillModel(
    data = [
      {
        name: "Скрипты",
        currentScore: 10,
        maxScore: 30,
        courseStatus: false,

        courseTasks: [
          {
            name: "Энтропия",
            requirementList: [
              {
                status: true,
              },
              {
                status: false,
              },
              {
                status: false,
              },
              {
                status: true,
              },
            ],
          },
          {
            name: "Энтропdsия",
            requirementList: [
              {
                status: true,
              },
              {
                status: false,
              },
              {
                status: false,
              },
              {
                status: true,
              },
            ],
          },
        ],
      },
    ]
  ) {
    this.courseList = data;

    // for (let element in data) {
    //   if (data[element] !== undefined) {
    //     this[element] = data[element];
    //   }
    // }
  }
}
