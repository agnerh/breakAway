import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { CustomerRoutingModule } from "./customer-routing.module";
import { CustomersListComponent } from "./customers-list/customers-list.component";
import { CustomerFilterPipe } from "src/pipes/customer-filter.pipe";
import { SortPipe } from "src/pipes/sort.pipe";
import { CustomersSortComponent } from "./customers-sort/customers-sort.component";
import { CustomersCreateComponent } from "./customers-create/customers-create.component";
import { SearchModule } from '../search/search.module';


@NgModule({
  declarations: [
    CustomersListComponent,
    CustomerFilterPipe,
    SortPipe,
    CustomersSortComponent,
    CustomersCreateComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    SearchModule,
  ]
})
export class CustomersModule {}
