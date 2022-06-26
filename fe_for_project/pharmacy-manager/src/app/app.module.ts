import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './templates-component/header/header.component';
import { FooterComponent } from './templates-component/footer/footer.component';
import { ModalComponent } from './templates-component/modal/modal.component';
import { CustomerCreateComponent } from './customer-component/customer-create/customer-create.component';
import { CustomerListComponent } from './customer-component/customer-list/customer-list.component';
import { CustomerEditComponent } from './customer-component/customer-edit/customer-edit.component';
import { EmployeeListComponent } from './employee-component/employee-list/employee-list.component';
import { EmployeeCeateComponent } from './employee-component/employee-ceate/employee-ceate.component';
import { EmployeeEditComponent } from './employee-component/employee-edit/employee-edit.component';
import { EmployeeModalComponent } from './employee-component/employee-modal/employee-modal.component';
import { PaymentOnlineComponent } from './cart-component/payment-online/payment-online.component';
import { CartComponentComponent } from './cart-component/cart-component/cart-component.component';
import { CartComponent } from './cart-component/cart/cart.component';
import { PaymentFinishComponent } from './cart-component/payment-finish/payment-finish.component';
import { MedicineCreateComponent } from './medicine-component/medicine-create/medicine-create.component';
import { MedicineListComponent } from './medicine-component/medicine-list/medicine-list.component';
import { MedicineEditComponent } from './medicine-component/medicine-edit/medicine-edit.component';
import { MedicineModalComponent } from './medicine-component/medicine-modal/medicine-modal.component';
import { AccountListComponent } from './account-component/account-list/account-list.component';
import { AccountEditComponent } from './account-component/account-edit/account-edit.component';
import { StatistitalChartComponent } from './reports-component/statistital-chart/statistital-chart.component';
import { ReportListComponent } from './reports-component/report-list/report-list.component';
import { LoginComponent } from './log-component/login/login.component';
import { LogoutComponent } from './log-component/logout/logout.component';
import { SignUpComponent } from './log-component/sign-up/sign-up.component';
import { PrescriptionCreateComponent } from './prescription-component/prescription-create/prescription-create.component';
import { PrescriptionEditComponent } from './prescription-component/prescription-edit/prescription-edit.component';
import { PrescriptionListComponent } from './prescription-component/prescription-list/prescription-list.component';
import { SalesManegementComponentComponent } from './sales-manegement-component/sales-manegement-component.component';
import { RetailComponent } from './sales-manegement-component/retail-component/retail/retail.component';
import { AvailablePrescriptionListComponent } from './sales-manegement-component/retail-component/available-prescription-list/available-prescription-list.component';
import { PrescriptionDetailComponent } from './sales-manegement-component/retail-component/prescription-detail/prescription-detail.component';
import { WholesaleComponent } from './sales-manegement-component/wholesale-component/wholesale/wholesale.component';
import { SuplierCreateComponent } from './supiler-component/suplier-create/suplier-create.component';
import { SuplierListComponent } from './supiler-component/suplier-list/suplier-list.component';
import { SuplierEditComponent } from './supiler-component/suplier-edit/suplier-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent,
    CustomerCreateComponent,
    CustomerListComponent,
    CustomerEditComponent,
    EmployeeListComponent,
    EmployeeCeateComponent,
    EmployeeEditComponent,
    EmployeeModalComponent,
    PaymentOnlineComponent,
    CartComponentComponent,
    CartComponent,
    PaymentFinishComponent,
    MedicineCreateComponent,
    MedicineListComponent,
    MedicineEditComponent,
    MedicineModalComponent,
    AccountListComponent,
    AccountEditComponent,
    StatistitalChartComponent,
    ReportListComponent,
    LoginComponent,
    LogoutComponent,
    SignUpComponent,
    PrescriptionCreateComponent,
    PrescriptionEditComponent,
    PrescriptionListComponent,
    SalesManegementComponentComponent,
    RetailComponent,
    AvailablePrescriptionListComponent,
    PrescriptionDetailComponent,
    WholesaleComponent,
    SuplierCreateComponent,
    SuplierListComponent,
    SuplierEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
