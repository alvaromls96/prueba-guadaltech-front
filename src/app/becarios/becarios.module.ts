import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BecariosComponent } from './becarios.component';
import { BecariosRouterModule } from './becarios.router';

@NgModule({
  declarations: [
    BecariosComponent
  ],
  imports: [
    SharedModule,
    BecariosRouterModule,
  ]
})
export class BecariosModule { }
