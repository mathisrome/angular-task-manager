import {Injectable} from '@angular/core';
import {ByStatutTaskListService} from "../byStatusTaskList/by-statut-task-list.service";
import {TaskList} from "../../model/TaskList";
import {Task} from 'src/app/model/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskFacadeService {

  constructor(
    private byStatutService: ByStatutTaskListService
  ) {
  }

  getListOfTasksDone(): TaskList {
    return this.byStatutService.getListOfTasksDone();
  }

  getListOfTaskNotDone(): TaskList {
    return this.byStatutService.getListOfTaskNotDone();
  }
}
