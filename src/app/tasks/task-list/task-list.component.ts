import {Component} from '@angular/core';
import {TaskList} from "../../model/TaskList";
import {TaskStatus, Task} from "../../model/Task";
import {CRUDTaskListService} from "../../crudtask-list.service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  constructor(private taskListService: CRUDTaskListService) {
  }

  taskList = this.taskListService.getList()
}
