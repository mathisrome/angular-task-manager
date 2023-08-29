import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RemoveTaskFormRoutingModule} from './remove-task-form-routing.module';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RemoveTaskFormRoutingModule,
    SharedModule
  ]
})
export class RemoveTaskFormModule {
}
