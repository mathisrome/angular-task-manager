import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TaskListComponent} from "./tasks/task-list/task-list.component";

const routes: Routes = [
  {path: 'tasks', component: TaskListComponent},
  {path: 'display', loadChildren: () => import('./tasks/tasks.module').then(module => module.TasksModule)},
  {path: '', redirectTo: 'display', pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
