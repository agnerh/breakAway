import { Component, OnInit } from "@angular/core";

import { Customer, CustomerType } from "src/models/customer";
import { CustomerService } from "../customer.service";

@Component({
  selector: "app-customers-list",
  templateUrl: "./customers-list.component.html",
  styleUrls: ["./customers-list.component.css"]
})
export class CustomersListComponent implements OnInit {
  public list1: Array<Customer>;
  public filter: string;
  public sortBy: string;
  public reverse: boolean = false;
  public input: Customer = new Customer();
  public CustomerType = CustomerType;

  constructor(private customerService: CustomerService) {}

  public ngOnInit(): void {
    this.showCustomers();
  }

  showCustomers() {
    this.customerService.getCustomers().subscribe(data => (this.list1 = data));
  }

  createCustomer() {
    console.log(this.input);
    this.customerService.postCustomer(this.input).subscribe(data => (this.input = data));
  }

  addTerms(newTerm: string) {
    this.filter = newTerm;
  }

  orderBy(order: string) {
    if (this.sortBy === order) {
      this.reverse = !this.reverse;
    } else {
      this.reverse = false;
    }

    this.sortBy = order;
  }
}
