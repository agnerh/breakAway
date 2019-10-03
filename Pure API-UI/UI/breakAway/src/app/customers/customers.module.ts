import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomersListComponent } from './customers-list/customers-list.component';

@NgModule({
  declarations: [CustomersListComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomersModule { }
