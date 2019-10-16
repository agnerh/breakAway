import { Component, OnInit } from "@angular/core";

import { Customer, CustomerType } from "src/models/customer";
import { CustomerService } from "../customer.service";
import { Alert, AlertsType } from "src/app/shared/alerts/alert";
import { AlertsCommunicationService } from "src/app/shared/alerts/alerts.commservice";

@Component({
  selector: "app-customers-create",
  templateUrl: "./customers-create.component.html",
  styleUrls: ["./customers-create.component.css"]
})
export class CustomersCreateComponent implements OnInit {
  public input: Customer = new Customer();
  public CustomerType = CustomerType;
  public alert: Alert = {
    type: AlertsType.Danger,
    message: "This is a message"
  };

  constructor(
    private customerService: CustomerService,
    private alertService: AlertsCommunicationService
  ) {}

  ngOnInit() {}

  createCustomer() {
    // console.log(this.input);
    this.customerService
      .postCustomer(this.input)
      .subscribe(data => (this.input = data));

    this.alertService.showAlert(this.alert);
  }
}
