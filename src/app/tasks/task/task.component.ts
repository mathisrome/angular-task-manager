import {Component, Input} from '@angular/core';
import {Task, TaskStatus} from "../../model/Task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task!: Task;
}
