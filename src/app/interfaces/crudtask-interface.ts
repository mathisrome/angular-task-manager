import { Task } from "../model/Task";
import {TaskList} from "../model/TaskList";

export interface CRUDTaskInterface  {
  getList(): TaskList
}
