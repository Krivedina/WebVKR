export class StudentListViewModel {
  public groupList: any;
  public allCourse: any;

  public fillModel(
    data = [
      {
        name: "КН-402",
        studentList: [
          { studentName: "Константин Константинович Константинопольский" },
          { studentName: "sobaka-deputata@gmail.com" },
        ],
        courseList: [{ courseName: "Скрипты" }, { courseName: "Питон" }],
      },
    ]
  ) {
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
