import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainRemoveTaskFormComponent} from "./main-remove-task-form/main-remove-task-form.component";

const routes: Routes = [
  {path: "", component: MainRemoveTaskFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemoveTaskFormRoutingModule {
}
