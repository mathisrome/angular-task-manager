import {Component} from '@angular/core';
import {TaskList} from "../model/TaskList";
import {TaskStatus, Task} from "../model/Task";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  taskList = new TaskList([
    new Task('Titre1', 'Description1', TaskStatus.TODO),
    new Task('Titre2', 'Description2', TaskStatus.IN_PROGRESS),
    new Task('Titre3', 'Description3', TaskStatus.DONE),
  ])
}
