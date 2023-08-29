import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Task} from "../../model/Task";

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss']
})
export class AddTaskFormComponent {

  @Output() submitEvent = new EventEmitter();

  form = new FormGroup({
    'title': new FormControl("", Validators.required),
    'description': new FormControl("", Validators.required),
    'status': new FormControl("TODO", Validators.required),
    'createdAt': new FormControl(new Date())
  });

  onSubmit() {
    this.submitEvent.emit(this.form.value)
  }
}
