import {Component, OnInit} from '@angular/core';
import {TaskFacadeService} from "../../services/taskFacade/task-facade.service";
import {TaskList} from "../../model/TaskList";

@Component({
  selector: 'app-main-task-list',
  templateUrl: './main-task-list.component.html',
  styleUrls: ['./main-task-list.component.scss']
})
export class MainTaskListComponent implements OnInit {

  allTaskList?: TaskList;
  archivedTaskList?: TaskList;

  constructor(private taskFacade: TaskFacadeService) {

  }

  ngOnInit() {
    this.taskFacade.getListOfTaskNotDone().subscribe(tasksList => this.allTaskList = tasksList);
    this.taskFacade.getListOfTasksDone().subscribe(tasksList => this.archivedTaskList = tasksList);
  }
}
