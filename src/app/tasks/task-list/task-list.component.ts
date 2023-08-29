import {Component} from '@angular/core';
import {TaskList} from "../../model/TaskList";
import {TaskStatus, Task} from "../../model/Task";
import {CRUDTaskListService} from "../../services/crudtask/crudtask-list.service";
import {ByStatutTaskListService} from "../../services/byStatusTaskList/by-statut-task-list.service";
import {ByStatusTaskListInterface} from "../../interfaces/by-status-task-list-interface";
import {TaskFacadeService} from "../../services/taskFacade/task-facade.service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  constructor(private taskFacade: TaskFacadeService) {
  }

  allTaskList = this.taskFacade.getListOfTaskNotDone()

  archivedTaskList = this.taskFacade.getListOfTasksDone()
}
