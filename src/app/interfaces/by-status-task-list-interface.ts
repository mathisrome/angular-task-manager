import {TaskList} from "../model/TaskList";
import {Observable} from "rxjs";

export interface ByStatusTaskListInterface {

  getListOfTasksDone(): Observable<TaskList>

  getListOfTaskNotDone(): Observable<TaskList>

  getListOfTasksTODO(): Observable<TaskList>

  getListOfTasksInProgress(): Observable<TaskList>

  getList(): Observable<TaskList>
}
