import { Injectable } from '@angular/core';
import {Task, TaskStatus} from "../../model/Task";
import {TaskList} from "../../model/TaskList";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  protected taskList : TaskList;

  constructor() {
    this.taskList = new TaskList([
      new Task('Titre1', 'Description1', TaskStatus.TODO, new Date()),
      new Task('Titre2', 'Description2', TaskStatus.IN_PROGRESS, new Date()),
      new Task('Titre3', 'Description3', TaskStatus.DONE, new Date()),
    ])
  }

  getList(): Observable<TaskList> {
    return of(this.taskList)
  }

  addTask(task: Task) {
    this.taskList.tasks.push(task)
    console.log(this.taskList)
  }
  private getByStatus(tasksStatus: TaskStatus[]) {
    let takeList = new TaskList(this.taskList.tasks.filter(task => tasksStatus.includes(task.status)))
    return of(takeList)
  }

  getListOfTasksDone() {
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
