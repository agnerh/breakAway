import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AlertsComponent } from "./alerts.component";
import { AlertsCommunicationService } from "./alerts.commservice";
import { of } from 'rxjs';
import { AlertsType, Alert } from './alert';

describe("AlertsComponent", () => {
  let component: AlertsComponent;
  let fixture: ComponentFixture<AlertsComponent>;
  const alert: Alert = { message: "This is a message", type: AlertsType.Danger }
  let alertServiceStub: Partial<AlertsCommunicationService>;

  beforeEach(async(() => {
    alertServiceStub = { 
      alerts: of(alert),
    };

    TestBed.configureTestingModule({
      declarations: [AlertsComponent],
      providers: [
        { provide: AlertsCommunicationService, userValue: alertServiceStub }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
