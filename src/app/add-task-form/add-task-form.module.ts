import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddTaskFormRoutingModule } from './add-task-form-routing.module';
import {SharedModule} from "../shared/shared.module";
import {MainAddTaskFormComponent} from "./main-add-task-form/main-add-task-form.component";
import {AddTaskFormComponent} from "./add-task-form/add-task-form.component";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AddTaskFormRoutingModule,
    SharedModule
  ]
})
export class AddTaskFormModule { }
