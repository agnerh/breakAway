import { Component } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { of } from "rxjs";

import { CustomersCreateComponent } from "./customers-create.component";
import { FormsModule } from "@angular/forms";
import { AlertsCommunicationService } from "src/app/shared/alerts/alerts.commservice";
import { CustomerService } from "../customer.service";
import { AlertsType, Alert } from "src/app/shared/alerts/alert";
import { Customer } from 'src/models/customer';

@Component({ selector: "app-alerts", template: "" })
class AlertsStubComponent {}
let alertServiceStub: Partial<AlertsCommunicationService>;
let customerServiceStub: Partial<CustomerService>;

describe("CustomersCreateComponent", () => {
  let component: CustomersCreateComponent;
  let fixture: ComponentFixture<CustomersCreateComponent>;
  const alert: Alert = {
    message: "This is a message",
    type: AlertsType.Danger
  };

  beforeEach(async(() => {
    alertServiceStub = {
      alerts: of(alert),
      showAlert: (alert: Alert) => { },
    };

    spyOn(alertServiceStub, "showAlert");

    customerServiceStub = {
      postCustomer: (customer: Customer) => of(customer),
    }

    TestBed.configureTestingModule({
      declarations: [CustomersCreateComponent, AlertsStubComponent],
      imports: [FormsModule],
      providers: [
        { provide: AlertsCommunicationService, useValue: alertServiceStub },
        { provide: CustomerService, useValue: customerServiceStub }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should show alert", () => {
    component.createCustomer();
    fixture.detectChanges();
    expect(alertServiceStub.showAlert).toHaveBeenCalled();
  });
});
