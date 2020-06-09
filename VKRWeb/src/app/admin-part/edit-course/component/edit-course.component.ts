import { Component, HostListener, OnInit } from "@angular/core";
import { EditCourseViewModel } from "../view-model/edit-course.view-model";
import { trigger, transition, style, animate } from "@angular/animations";
import { FormGroup, FormControl } from "@angular/forms";
import { EditCourseBaseService } from "../data/edit-course.base.service";
import { WrapperMainBaseService } from "src/app/global-part/wrapper-main/data/wrapper-main.base.service";

@Component({
  selector: "edit-course",
  templateUrl: "./edit-course.html",
  styleUrls: ["./edit-course.scss"],
  // animations: [
  //   trigger("fadeInOut", [
  //     transition(":enter", [
  //       style({ opacity: 0 }),
  //       animate(200, style({ opacity: 1 })),
  //     ]),
  //     transition(":leave", [animate(200, style({ opacity: 0 }))]),
  //   ]),
  // ],
})
export class EditCourseComponent implements OnInit {
  public isLoadingCourseList: boolean = false;
  public isOpen: boolean = true;
  public isCreateCourse: boolean = false;
  public isEditCourse: boolean = false;
  public isDeleteTask: boolean = false;

  public currentCourse: any = null;
  public currentTask: any = null;

  public modelEditCourse: EditCourseViewModel = new EditCourseViewModel();

  public addTaskForm = new FormGroup({
    name: new FormControl(),
    deadline: new FormControl(),
  });

  @HostListener("click", ["$event"]) onClick(e: any) {
    if (e.target.className.match("edit-block-wrapper")) {
      this.closeAll();
    }
  }

  constructor(
    private editCourseBaseService: EditCourseBaseService,
    private wrapperMainBaseService: WrapperMainBaseService
  ) {}

  public ngOnInit() {
    this.isLoadingCourseList = true;
    this.fillCourseListPage();
  }

  public fillCourseListPage(flag = true, courseId = null) {
    this.editCourseBaseService.getCourseList(flag).subscribe((courseList) => {
      console.log(courseList);
      this.modelEditCourse.fillModel(courseList);
      this.modelEditCourse.courseList.forEach((course) => {
        if (course.id === courseId) {
          course.isOpenView = true;
        }
      });

      this.isLoadingCourseList = false;
    });
  }

  trackByFn(index, item) {
    return item.id;
  }

  public openCourse(course) {
    course.isOpenView = !course.isOpenView;
  }

  public createCourseModal() {
    this.isCreateCourse = !this.isCreateCourse;
  }

  public editCourseModal(course: any) {
    course.isEditCourse = !course.isEditCourse;
    this.currentCourse = course;
  }

  public deleteCourseModal(course: any) {
    course.isDeleteCourse = !course.isDeleteCourse;
    this.currentCourse = course;
  }

  public deleteTaskModal(course, task) {
    task.isDeleteTask = !task.isDeleteTask;
    this.currentTask = task;
    this.currentCourse = course;
  }

  public addTask(courseId) {
    console.log(this.addTaskForm.value);
    this.currentCourse = courseId;
    const newTaskModel = {
      name: this.addTaskForm.value.name,
      description: null,
      deadline: this.addTaskForm.value.deadline,
      maxScore: 0,
      requirements: [],
    };
    this.addTaskForm.reset();
    this.editCourseBaseService.postAddTask(newTaskModel, courseId).subscribe(
      () => {
        this.fillCourseListPage(false, this.currentCourse);
        this.currentCourse = null;
        this.wrapperMainBaseService.showMessage("Задача добавлена", true);
      },
      (error) => {
        this.wrapperMainBaseService.showMessage(
          "Добавить задачу не удалось",
          false
        );
        this.closeAll();
      }
    );
  }

  public deleteCourse(value: string) {
    if (!value) {
      this.currentCourse.isDeleteCourse = false;
      this.currentCourse = null;
    } else {
      this.editCourseBaseService
        .postDeleteCourse(this.currentCourse.id)
        .subscribe(
          () => {
            this.fillCourseListPage(false);
            this.wrapperMainBaseService.showMessage("Курс удален", true);
          },
          (error) => {
            this.closeAll();
            this.wrapperMainBaseService.showMessage(
              "Удалить курс не удалось",
              false
            );
          }
        );
      this.currentCourse.isDeleteCourse = false;
      this.currentCourse = null;
      console.log(this.currentCourse);
    }
  }

  public deleteTask(value: string) {
    console.log(value);
    if (!value) {
      this.currentTask.isDeleteTask = false;
      this.currentTask = null;
      this.currentCourse = null;
    } else {
      this.editCourseBaseService
        .postDeleteTask(this.currentCourse.id, this.currentTask.id)
        .subscribe(
          () => {
            this.fillCourseListPage(false, this.currentCourse.id);
            this.currentCourse = null;
            this.wrapperMainBaseService.showMessage("Задача удалена", true);
          },
          (error) => {
            this.closeAll();
            this.wrapperMainBaseService.showMessage(
              "Удалить задачу не удалось",
              false
            );
          }
        );
      this.currentTask.isDeleteTask = false;
      this.currentTask = null;
      console.log(this.currentTask);
    }
  }

  public editCurrentCourse(courseModel: any) {
    console.log(courseModel);
    const newCourseModel = {
      name: courseModel.firstTitle,
      maxScore: +courseModel.secondTitle,
    };
    this.editCourseBaseService
      .postEditCourse(newCourseModel, this.currentCourse.id)
      .subscribe(
        () => {
          this.fillCourseListPage(false);
          this.wrapperMainBaseService.showMessage("Курс изменен", true);
        },
        (error) => {
          this.closeAll();
          this.wrapperMainBaseService.showMessage(
            "Изменить курс не удалось",
            false
          );
        }
      );
    this.currentCourse.isEditCourse = false;
  }

  public addNewCourse(courseModel: any) {
    const newCourseModel = {
      name: courseModel.firstTitle,
      maxScore: +courseModel.secondTitle,
      courseTasks: [],
    };
    this.editCourseBaseService.postCreateCourse(newCourseModel).subscribe(
      () => {
        this.fillCourseListPage(false);
        this.wrapperMainBaseService.showMessage("Курс добавлен", true);
      },
      (error) => {
        this.wrapperMainBaseService.showMessage(
          "Создать курс не удалось",
          false
        );
        this.fillCourseListPage();

        // this.closeAll();
      }
    );
    this.isCreateCourse = false;
  }

  private closeAll() {
    this.isCreateCourse = false;
    if (this.currentTask) {
      this.currentTask.isDeleteTask = false;
    }
    if (this.currentCourse) {
      this.currentCourse.isEditCourse = false;
      this.currentCourse.isDeleteCourse = false;
    }
    this.currentTask = null;
    this.currentCourse = null;
  }
}
