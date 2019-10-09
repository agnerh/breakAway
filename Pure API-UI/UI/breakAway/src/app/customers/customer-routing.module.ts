import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersCreateComponent } from './customers-create/customers-create.component';

const customerRoutes: Routes = [
    { path: "customer", component: CustomersListComponent },
    { path: "create-customer", component: CustomersCreateComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(customerRoutes),
    ],
    exports: [
        RouterModule
    ]
})
export class CustomerRoutingModule { }