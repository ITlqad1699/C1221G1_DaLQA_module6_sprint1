import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesManegementRoutingModule } from './sales-manegement-routing.module';
import {SalesManegementComponentComponent} from "./sales-manegement-component.component";
import {RetailComponent} from "./retail-component/retail/retail.component";
import {AvailablePrescriptionListComponent} from "./retail-component/available-prescription-list/available-prescription-list.component";
import {PrescriptionDetailComponent} from "./retail-component/prescription-detail/prescription-detail.component";
import {WholesaleComponent} from "./wholesale-component/wholesale/wholesale.component";
import { RefundCustomerComponent } from './refund-customer/refund-customer.component';


@NgModule({
  declarations: [
    SalesManegementComponentComponent,
    RetailComponent,
    AvailablePrescriptionListComponent,
    PrescriptionDetailComponent,
    WholesaleComponent,
    RefundCustomerComponent,
  ],
  imports: [
    CommonModule,
    SalesManegementRoutingModule
  ]
})
export class SalesManegementModule { }
