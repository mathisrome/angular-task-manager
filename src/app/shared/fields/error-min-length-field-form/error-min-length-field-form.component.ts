import {Component, Input} from '@angular/core';
import {AbstractControl, FormControl} from "@angular/forms";

@Component({
  selector: 'app-error-min-length-field-form',
  templateUrl: './error-min-length-field-form.component.html',
  styleUrls: ['./error-min-length-field-form.component.scss']
})
export class ErrorMinLengthFieldFormComponent {
  @Input() isDisplay!: boolean
  @Input() inputName!: string
  @Input() minLength!: string
}
