import { Component, OnInit, Output } from '@angular/core';

import { Customer, CustomerType } from 'src/models/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})

export class CustomersListComponent implements OnInit {
  public list1: Array<Customer>;
  
  constructor(
    private customerService: CustomerService,
  ) { }

  public ngOnInit(): void {
    this.showCustomers();
  }

  showCustomers() {
    this.customerService.getCustomers().subscribe(data => this.list1 = data);
  }

}