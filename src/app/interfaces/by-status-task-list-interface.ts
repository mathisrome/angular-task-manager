import {TaskList} from "../model/TaskList";

export interface ByStatusTaskListInterface {

  getListOfTasksDone(): TaskList

  getListOfTaskNotDone(): TaskList

  getListOfTasksTODO(): TaskList

  getListOfTasksInProgress(): TaskList

  getList(): TaskList
}
