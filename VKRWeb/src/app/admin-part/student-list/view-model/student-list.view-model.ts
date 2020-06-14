export class StudentListViewModel {
  public groupList: any;
  public allCourse: any;

  public fillModel(data) {
    data.forEach((group) => {
      group.inviteList = group.inviteList.map((student) => {
        return {
          ...student,
          outputName: student.name || student.email,
          isDeleteStudent: false,
        };
      });
      group.courseList = group.courseList.map((group) => {
        return { ...group, isDeleteCourse: false };
      });
      return group;
    });
    this.groupList = data.map((groupData) => {
      return {
        ...groupData,
        isOpenView: false,
        isEditGroupTitle: false,
        isDeleteGroup: false,
      };
    });
  }
}
