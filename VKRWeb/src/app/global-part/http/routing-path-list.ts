export const RequestPathList = {
  // //get
  // listStudents:
  //   "http://localhost:8080/profile/1f4a0cc8b33c43c3beddfe6181c1b8c5",

  //Authorization
  //post
  signIn: "http://localhost:8080/signIn",
  //post
  signUp: "http://localhost:8080/signUp",
  //post
  logOut: "http://localhost:8080/signOut",

  //profile
  //get
  openUser: "http://localhost:8080/profile/get",
  saveUser: "http://localhost:8080/profile/save",
  changePassword: "http://localhost:8080/changePassword",

  //Task
  //get
  courseTask:
    "http://localhost:8080/course/selecttasks?courseId=edbe8757-86b8-4e30-bc97-e72b2b5fce4b",
  //post
  addTask:
    "http://localhost:8080/course/addtask?courseId=edbe8757-86b8-4e30-bc97-e72b2b5fce4b",
  //get
  getTask:
    "http://localhost:8080/task/get",
  //post
  editTask:
    "http://localhost:8080/task/save?id=b8a19b2a-1280-4898-967c-386adbd58f0e",
  //post
  deleteTask:
    "http://localhost:8080/course/deleteTask?courseId=c1031b0a-0967-41d4-9966-f762a264fed4&taskId=d2d13dd7-4d0d-4842-87f6-4afe276ecadb",

  //Course
  //get
  courseList: "http://localhost:8080/course/select",
  //post
  courseCreate: "http://localhost:8080/course/save",
  //post
  courseEdit:
    "http://localhost:8080/course/save?id=edbe8757-86b8-4e30-bc97-e72b2b5fce4b",
  //get
  openCourse:
    "http://localhost:8080/course/get?id=edbe8757-86b8-4e30-bc97-e72b2b5fce4b",
  //post
  deleteCourse: "http://localhost:8080/course/delete",
};