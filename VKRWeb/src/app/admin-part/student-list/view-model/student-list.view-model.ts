export class StudentListViewModel {
  public groupList: any;
  public allCourse: any;

  public fillModel(
    data = {
      groupList: [
        {
          groupName: "КН-402",
          studentList: [
            { studentName: "Константин Константинович Константинопольский" },
            { studentName: "sobaka-deputata@gmail.com" },
          ],
          courseList: [{ courseName: "Скрипты" }, { courseName: "Питон" }],
        },
      ],
      allCourse: ["Скрипты", "Питон", "ЯТП"],
    }
  ) {
    for (let element in data) {
      if (element !== undefined) {
        this[element] = data[element];
      }
    }
  }
}
