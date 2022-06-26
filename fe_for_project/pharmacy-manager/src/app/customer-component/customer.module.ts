import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerModalComponent } from './customer-modal/customer-modal.component';
import { CustomerComponentComponent } from './customer-component.component';


@NgModule({
  declarations: [CustomerModalComponent, CustomerComponentComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
