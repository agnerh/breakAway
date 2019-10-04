import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersSearchComponent } from './customers-search/customers-search.component';
import { CustomerFilterPipe } from 'src/pipes/customer-filter.pipe';

@NgModule({
  declarations: [
    CustomersListComponent,
    CustomersSearchComponent,
    CustomerFilterPipe,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule
  ]
})
export class CustomersModule { }
