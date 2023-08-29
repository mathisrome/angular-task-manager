import { Component } from '@angular/core';
import {Task} from "../../model/Task";
import {TaskService} from "../../services/taskService/task.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-remove-task-form',
  templateUrl: './main-remove-task-form.component.html',
  styleUrls: ['./main-remove-task-form.component.scss']
})
export class MainRemoveTaskFormComponent {

  constructor(private taskService: TaskService, private router: Router) {
  }

  handleSubmitEvent(title: string) {
    this.taskService.removeTask(title)
    this.router.navigateByUrl('/tasks')
  }
}
