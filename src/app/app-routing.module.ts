import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TaskListComponent} from "./tasks/task-list/task-list.component";
import {MainTaskListComponent} from "./tasks/main-task-list/main-task-list.component";
import {MainAddTaskFormComponent} from "./add-task-form/main-add-task-form/main-add-task-form.component";

const routes: Routes = [
  {path: 'tasks', component: MainTaskListComponent},
  {path: 'display', loadChildren: () => import('./tasks/tasks.module').then(module => module.TasksModule)},
  {path: '', redirectTo: 'display', pathMatch: "full"},
  {path: 'tasks/new', component: MainAddTaskFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
