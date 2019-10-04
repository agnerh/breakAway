import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { SearchComponent } from '../search/search-components/search.component';
import { CustomerFilterPipe } from 'src/pipes/customer-filter.pipe';

@NgModule({
  declarations: [
    CustomersListComponent,
    SearchComponent,
    CustomerFilterPipe,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule
  ]
})
export class CustomersModule { }
