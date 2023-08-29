import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Task} from "../../model/Task";

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss']
})
export class AddTaskFormComponent {

  @Input() form !: FormGroup;
  @Output() submitEvent = new EventEmitter<Task>();

  onSubmit() {
    let taskObject = this.form.value

    this.submitEvent.emit(taskObject)
  }
}
