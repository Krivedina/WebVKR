import { RequestPathList } from "src/app/global-part/http/routing-path-list";

export class CourseListFormViewModel {
  public courseList;

  public fillModel(data) {
    this.courseList = data.map((course) => {
      let currentScore = 0;
      let maxScore = 0;

      course.courseTasks = course.courseTasks.map((task) => {
        let downloadUrl = null;
        if (task.solutionId) {
          downloadUrl = this.createDownloadUrl(task.solutionId);
        }
        currentScore += task.currentScore;
        maxScore += task.maxScore;
        return { ...task, downloadUrl: downloadUrl };
      });
      course.currentScore = +currentScore;
      course.maxScore = +maxScore;
      let progress = Math.floor(
        (+course.currentScore / +course.maxScore) * 100
      );
      if (progress > 100) {
        progress = 100;
      }
      return { ...course, progress: progress, isOpenView: false };
    });
  }

  private createDownloadUrl(taskId) {
    return RequestPathList.downloadEntryTaskData + `?attachmentId=${taskId}`;
  }
}
