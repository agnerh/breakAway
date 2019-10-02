import { Component, OnInit } from '@angular/core';

import { Customer, CustomerType } from 'src/models/customer';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  public list = customers;

  constructor() { }

  ngOnInit() {
  }

}

const customers: Customer[] = [
  {
    id: 1,
    title: "Mr",
    firstName: "Henrik",
    lastName: "Agner",
    type: CustomerType.Standard
  },
  {
    id: 2,
    title: "Mrs",
    firstName: "Maja",
    lastName: "Agner",
    type: CustomerType.Gold
  }
]