import { NgModule } from "@angular/core";
import { TaskComponent } from './component/task.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [TaskComponent],
  exports: [],
})
export class TaskModule {}
