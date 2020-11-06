import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { CustomerRoutingModule } from "./customer-routing.module";
import { CustomersListComponent } from "./customers-list/customers-list.component";
import { CustomersCreateComponent } from "./customers-create/customers-create.component";
import { CustomersSortComponent } from "./customers-sort/customers-sort.component";

import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CustomersListComponent,
    CustomersSortComponent,
    CustomersCreateComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    SharedModule,
  ]
})
export class CustomersModule {}
