import { NgModule } from "@angular/core";
import { TaskListBaseService } from './data/task-list.base.service';
import { TaskListComponent } from './components/task-list.components';

@NgModule({
    providers: [TaskListBaseService],
    declarations: [TaskListComponent],
    exports: [TaskListComponent]
})
export class TaskListModule {}