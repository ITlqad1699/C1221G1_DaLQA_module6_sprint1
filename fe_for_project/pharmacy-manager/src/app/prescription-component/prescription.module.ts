import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrescriptionRoutingModule } from './prescription-routing.module';
import { PrescriptionModalComponent } from './prescription-modal/prescription-modal.component';
import { PrescriptionComponentComponent } from './prescription-component.component';


@NgModule({
  declarations: [PrescriptionModalComponent, PrescriptionComponentComponent],
  imports: [
    CommonModule,
    PrescriptionRoutingModule
  ]
})
export class PrescriptionModule { }
