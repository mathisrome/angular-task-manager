import {Injectable} from '@angular/core';
import {CRUDTaskListService} from "../crudtask/crudtask-list.service";
import {TaskStatus} from "../../model/Task";
import {ByStatusTaskListInterface} from "../../interfaces/by-status-task-list-interface";
import {TaskList} from "../../model/TaskList";

@Injectable({
  providedIn: 'root'
})
export class ByStatutTaskListService extends CRUDTaskListService implements ByStatusTaskListInterface {

  private getByStatus(tasksStatus: TaskStatus[]) {
    const tasks = this.getList().tasks.filter(task => tasksStatus.includes(task.status))
    return new TaskList(tasks)
  }

  getListOfTasksDone(): TaskList {
    return this.getByStatus([TaskStatus.DONE])
  }

  getListOfTaskNotDone() {
    return this.getByStatus([TaskStatus.TODO, TaskStatus.IN_PROGRESS])
  }

  getListOfTasksTODO() {
    return this.getByStatus([TaskStatus.TODO])
  }

  getListOfTasksInProgress() {
    return this.getByStatus([TaskStatus.IN_PROGRESS])
  }
}
