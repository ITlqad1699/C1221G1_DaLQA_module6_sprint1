import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartModalComponent } from './cart-modal/cart-modal.component';
import { CartComponentComponent } from './cart-component.component';


@NgModule({
  declarations: [CartModalComponent, CartComponentComponent],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
