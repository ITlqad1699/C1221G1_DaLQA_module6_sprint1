import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicineRoutingModule } from './medicine-routing.module';
import { MedicineTypesComponent } from './medicine-types/medicine-types.component';
import { MedicineComponentComponent } from './medicine-component.component';


@NgModule({
  declarations: [MedicineTypesComponent, MedicineComponentComponent],
  imports: [
    CommonModule,
    MedicineRoutingModule
  ]
})
export class MedicineModule { }
