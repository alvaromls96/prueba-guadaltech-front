import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'becarios',
    loadChildren: () => import('./becarios/becarios.module').then(m => m.BecariosModule)
  },
  {
    path: '',
    redirectTo: 'becarios',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }