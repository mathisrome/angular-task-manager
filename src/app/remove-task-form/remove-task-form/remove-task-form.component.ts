import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-remove-task-form',
  templateUrl: './remove-task-form.component.html',
  styleUrls: ['./remove-task-form.component.scss']
})
export class RemoveTaskFormComponent {
  form = new FormGroup({
    title: new FormControl("", [
      Validators.required,
      Validators.minLength(4)
    ])
  })

  @Output() submitEvent = new EventEmitter();

  get title(){
    return this.form.get('title')
  }

  onSubmit(){
    this.submitEvent.emit(this.form.value.title)
  }
}
