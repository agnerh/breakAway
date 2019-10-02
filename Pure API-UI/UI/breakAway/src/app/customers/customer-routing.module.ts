import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './customers-list/customers-list.component';

const customerRoutes: Routes = [
    { path: "customer", component: CustomersListComponent },
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