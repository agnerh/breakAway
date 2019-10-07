import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { SearchComponent } from '../search/search-components/search.component';
// import { SortComponent } from '../sort/sort-components/sort.component';
import { CustomerFilterPipe } from 'src/pipes/customer-filter.pipe';
import { CustomerSortPipe } from 'src/pipes/customer-sort.pipe';

@NgModule({
  declarations: [
    CustomersListComponent,
    SearchComponent,
    // SortComponent,
    CustomerFilterPipe,
    CustomerSortPipe
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule
  ]
})
export class CustomersModule { }
