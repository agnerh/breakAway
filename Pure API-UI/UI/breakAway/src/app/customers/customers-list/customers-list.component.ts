import { Component, OnInit } from "@angular/core";

import { Customer } from "src/models/customer";
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

  constructor(private customerService: CustomerService) {}

  public ngOnInit(): void {
    this.showCustomers();
  }

  showCustomers() {
    this.customerService.getCustomers().subscribe(data => (this.list1 = data));
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
