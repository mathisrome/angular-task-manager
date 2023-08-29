import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  ErrorMaxLengthFieldFormComponent
} from "./fields/error-max-length-field-form/error-max-length-field-form.component";
import {
  ErrorMinLengthFieldFormComponent
} from "./fields/error-min-length-field-form/error-min-length-field-form.component";
import {ErrorRequiredFieldFormComponent} from "./fields/error-required-field-form/error-required-field-form.component";


@NgModule({
  declarations: [
    ErrorMaxLengthFieldFormComponent,
    ErrorMinLengthFieldFormComponent,
    ErrorRequiredFieldFormComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorMaxLengthFieldFormComponent,
    ErrorMinLengthFieldFormComponent,
    ErrorRequiredFieldFormComponent,
  ]
})
export class SharedModule {
}
