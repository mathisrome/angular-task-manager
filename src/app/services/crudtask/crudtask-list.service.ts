import {Injectable} from '@angular/core';
import {Task, TaskStatus} from "../../model/Task";
import {TaskList} from "../../model/TaskList";
import {CRUDTaskInterface} from "../../interfaces/crudtask-interface";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CRUDTaskListService implements CRUDTaskInterface {
  protected taskList = new TaskList([
    new Task('Titre1', 'Description1', TaskStatus.TODO, new Date()),
    new Task('Titre2', 'Description2', TaskStatus.IN_PROGRESS, new Date()),
    new Task('Titre3', 'Description3', TaskStatus.DONE, new Date()),
  ])

  constructor() {
  }

  getList(): Observable<TaskList> {
    return of(this.taskList)
  }

  addTask(task: Task) {
    this.taskList.tasks.push(task)
    console.log(this.taskList)
  }
}
