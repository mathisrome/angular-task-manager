import { Task } from "../model/Task";
import {TaskList} from "../model/TaskList";
import {Observable} from "rxjs";

export interface CRUDTaskInterface  {
  getList(): Observable<TaskList>
}
