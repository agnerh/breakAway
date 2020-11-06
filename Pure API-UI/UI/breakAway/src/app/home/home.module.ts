import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeMainComponent } from './home-main/home-main.component';
// import { CustomersModule } from '../customers/customers.module';

@NgModule({
  declarations: [HomeMainComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    // CustomersModule
  ]
})
export class HomeModule { }
