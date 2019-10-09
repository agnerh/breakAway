import { Component, OnInit } from "@angular/core";

import { Customer, CustomerType } from "src/models/customer";
import { CustomerService } from "../customer.service";

@Component({
  selector: "app-customers-create",
  templateUrl: "./customers-create.component.html",
  styleUrls: ["./customers-create.component.css"]
})
export class CustomersCreateComponent implements OnInit {
  public input: Customer = new Customer();
  public CustomerType = CustomerType;

  constructor(private customerService: CustomerService) {}

  ngOnInit() {}

  createCustomer() {
    console.log(this.input);
    this.customerService
      .postCustomer(this.input)
      .subscribe(data => (this.input = data));
  }
}
