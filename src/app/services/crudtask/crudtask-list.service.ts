import {Injectable} from '@angular/core';
import {Task, TaskStatus} from "../../model/Task";
import {TaskList} from "../../model/TaskList";
import {CRUDTaskInterface} from "../../interfaces/crudtask-interface";

@Injectable({
  providedIn: 'root'
})
export class CRUDTaskListService implements CRUDTaskInterface{
  private tasks: Task[] = [
    new Task('Titre1', 'Description1', TaskStatus.TODO, new Date()),
    new Task('Titre2', 'Description2', TaskStatus.IN_PROGRESS, new Date()),
    new Task('Titre3', 'Description3', TaskStatus.DONE, new Date()),
  ]

  constructor() {
  }

  getList(): TaskList {
    return new TaskList(this.tasks)
  }
}
