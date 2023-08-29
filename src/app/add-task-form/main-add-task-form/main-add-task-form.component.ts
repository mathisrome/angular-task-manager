import {Component} from '@angular/core';
import {Task} from 'src/app/model/Task';
import {Router} from "@angular/router";
import {TaskService} from "../../services/taskService/task.service";

@Component({
  selector: 'app-main-add-task-form',
  templateUrl: './main-add-task-form.component.html',
  styleUrls: ['./main-add-task-form.component.scss']
})
export class MainAddTaskFormComponent {
  constructor(private taskService: TaskService, private router: Router) {
  }

  handleSubmitEvent(task: Task) {
    task = new Task(task.title, task.description, task.status, new Date())
    this.taskService.addTask(task)
    this.router.navigateByUrl('/tasks')
  }
}
