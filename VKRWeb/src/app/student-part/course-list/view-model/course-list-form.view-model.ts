import { RequestPathList } from "src/app/global-part/http/routing-path-list";

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
            solutionId: "",
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
            solutionId: "",
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
      course.courseTasks = course.courseTasks.map((task) => {
        let downloadUrl = null;
        if (task.solutionId) {
          downloadUrl = this.createDownloadUrl(task.solutionId);
        }
        return { ...task, downloadUrl: downloadUrl };
      });

      return { progress: progress, isOpenView: false, ...course };
    });

    // for (let element in data) {
    //   if (data[element] !== undefined) {
    //     this[element] = data[element];
    //   }
    // }
  }

  private createDownloadUrl(taskId) {
    return RequestPathList.downloadEntryTaskData + `?attachmentId=${taskId}`;
  }
}
