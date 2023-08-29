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
    title: new FormControl("", [
      Validators.required,
      Validators.minLength(4)
    ]),
    description: new FormControl("", [
      Validators.minLength(10),
      Validators.required,
      Validators.maxLength(100),
    ]),
    status: new FormControl("todo", [
      Validators.required
    ]),
  });

  get title() {
    return this.form.get('title');
  }

  get description() {
    return this.form.get('description');
  }

  onSubmit() {
    this.submitEvent.emit(this.form.value)
  }
}
