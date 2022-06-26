import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogRoutingModule } from './log-routing.module';
import { LogComponentComponent } from './log-component.component';


@NgModule({
  declarations: [LogComponentComponent],
  imports: [
    CommonModule,
    LogRoutingModule
  ]
})
export class LogModule { }
