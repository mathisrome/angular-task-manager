import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { TaskComponent } from './tasks/task/task.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { ColorByStatusDirective } from './color-by-status.directive';
import { DateFormatPipe } from './date-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    TaskComponent,
    TaskListComponent,
    ColorByStatusDirective,
    DateFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
