import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {DateFormatPipe} from './pipes/date-format.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TaskListComponent} from "./tasks/task-list/task-list.component";
import {MainTaskListComponent} from "./tasks/main-task-list/main-task-list.component";
import {TaskComponent} from "./tasks/task/task.component";
import {RemoveTaskFormComponent} from "./remove-task-form/remove-task-form/remove-task-form.component";
import {MainRemoveTaskFormComponent} from "./remove-task-form/main-remove-task-form/main-remove-task-form.component";
import {AddTaskFormComponent} from "./add-task-form/add-task-form/add-task-form.component";
import {MainAddTaskFormComponent} from "./add-task-form/main-add-task-form/main-add-task-form.component";
import {ColorByStatusDirective} from "./directives/color-by-status.directive";
import {
  ErrorRequiredFieldFormComponent
} from "./shared/fields/error-required-field-form/error-required-field-form.component";
import {
  ErrorMaxLengthFieldFormComponent
} from "./shared/fields/error-max-length-field-form/error-max-length-field-form.component";
import {
  ErrorMinLengthFieldFormComponent
} from "./shared/fields/error-min-length-field-form/error-min-length-field-form.component";

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DateFormatPipe,
    TaskListComponent,
    MainTaskListComponent,
    TaskComponent,
    RemoveTaskFormComponent,
    MainRemoveTaskFormComponent,
    AddTaskFormComponent,
    MainAddTaskFormComponent,
    ColorByStatusDirective,
    ErrorRequiredFieldFormComponent,
    ErrorMaxLengthFieldFormComponent,
    ErrorMinLengthFieldFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
