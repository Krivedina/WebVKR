import { ICourseList } from 'src/app/global-part/interface/course-list.interface';

export class EditCourseViewModel {
  public courseList: any;

  public fillModel(data) {
    this.courseList = data.map((course) => {
      let maxScore = 0;
      if (course.courseTasks) {
        course.courseTasks = course.courseTasks.map((task) => {
          maxScore += +task.maxScore;
          return { isDeleteTask: false, ...task };
        });
      }
      course.maxScore = +maxScore;
      
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
