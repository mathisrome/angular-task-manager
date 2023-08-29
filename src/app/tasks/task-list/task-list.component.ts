import {Component, Input} from '@angular/core';
import {TaskFacadeService} from "../../services/taskFacade/task-facade.service";
import {TaskList} from "../../model/TaskList";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  constructor(private taskFacade: TaskFacadeService) {
  }

  @Input() allTaskList ?: TaskList;

  @Input() archivedTaskList ?: TaskList;
}
