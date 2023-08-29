import {Injectable} from '@angular/core';
import {TaskService} from "../taskService/task.service";

@Injectable({
  providedIn: 'root'
})
export class TaskFacadeService {
  constructor(private taskService: TaskService  ) {
  }

  getListOfTasksDone() {
    return this.taskService.getListOfTasksDone();
  }

  getListOfTaskNotDone() {
    return this.taskService.getListOfTaskNotDone();
  }
}
