import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TaskListComponent} from "./task-list/task-list.component";
import {MainTaskListComponent} from "./main-task-list/main-task-list.component";

const routes: Routes = [
  {path: '', component: MainTaskListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule {
}
