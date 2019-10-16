import { TestBed } from "@angular/core/testing";
import { AlertsCommunicationService } from "./alerts.commservice";
import { Alert, AlertsType } from "./alert";

describe("AlertsCommService", () => {
  const alertMessage = "This is an alert";

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertsCommunicationService]
    });
  });
  
  it("should be created", () => {
    const service: AlertsCommunicationService = TestBed.get(
      AlertsCommunicationService
    );
    expect(service).toBeTruthy();
  });

  it("should be observable", () => {
    const service: AlertsCommunicationService = TestBed.get(
      AlertsCommunicationService
    );

    const testAlert: Alert = { message: alertMessage, type: AlertsType.Danger };
    service.alerts.subscribe(alert => {
      expect(alert).toBe(testAlert);
    });

    service.showAlert(testAlert);
  });
});