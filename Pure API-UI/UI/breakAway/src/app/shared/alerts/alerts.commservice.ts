import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Alert, AlertsType } from "./alert";

@Injectable()
export class AlertsCommunicationService {
  public alerts: Observable<Alert>;
  private subject: Subject<Alert>;

  constructor() {
    this.subject = new Subject();
    this.alerts = this.subject.asObservable();
  }

  public showAlert(alert: Alert) {
    this.subject.next(alert);
  }
}
