import { Task } from "../model/Task";
import {TaskList} from "../model/TaskList";
import {Observable} from "rxjs";

export interface TaskInterface {
  getList(): Observable<TaskList>

  getListOfTasksDone(): Observable<TaskList>

  getListOfTaskNotDone(): Observable<TaskList>

  getListOfTasksTODO(): Observable<TaskList>

  getListOfTasksInProgress(): Observable<TaskList>

  getList(): Observable<TaskList>
}
