import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { TaskComponent } from './task/task.component';
import { MainTaskComponent } from './main-task/main-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    TaskComponent,
    MainTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
