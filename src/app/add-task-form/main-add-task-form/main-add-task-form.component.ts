import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TaskList} from "../../model/TaskList";
import {Task} from 'src/app/model/Task';
import {CRUDTaskListService} from "../../services/crudtask/crudtask-list.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-add-task-form',
  templateUrl: './main-add-task-form.component.html',
  styleUrls: ['./main-add-task-form.component.scss']
})
export class MainAddTaskFormComponent {
  form = new FormGroup({
    'title': new FormControl("", Validators.required),
    'description': new FormControl("", Validators.required),
    'status': new FormControl("TODO", Validators.required),
  });

  constructor(private CRUDTaskService: CRUDTaskListService, private router: Router) {
  }

  handleSubmitEvent(task: Task) {
    this.CRUDTaskService.addTask(task)
    this.router.navigateByUrl('/tasks')
  }
}
