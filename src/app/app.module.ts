import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { TaskComponent } from './tasks/task/task.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { ColorByStatusDirective } from './directives/color-by-status.directive';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { MainTaskListComponent } from './tasks/main-task-list/main-task-list.component';
import { AddTaskFormComponent } from './add-task-form/add-task-form/add-task-form.component';
import { MainAddTaskFormComponent } from './add-task-form/main-add-task-form/main-add-task-form.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    TaskComponent,
    TaskListComponent,
    ColorByStatusDirective,
    DateFormatPipe,
    MainTaskListComponent,
    AddTaskFormComponent,
    MainAddTaskFormComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
