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
            currentScore: 2,
            maxScore: 12,
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
            currentScore: 2,
            maxScore: 3,
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
    this.courseList = data.map((course) => {
      let progress = Math.floor(
        (+course.currentScore / +course.maxScore) * 100
      );
      if (progress > 100) {
        progress = 100;
      }
      return { progress: progress, isOpenView: false, ...course };
    });

    // for (let element in data) {
    //   if (data[element] !== undefined) {
    //     this[element] = data[element];
    //   }
    // }
  }
}
