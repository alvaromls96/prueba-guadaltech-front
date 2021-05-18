import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BecariosComponent } from './becarios.component';

const routes: Routes = [
  {
    path: '',
    component: BecariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BecariosRouterModule { }