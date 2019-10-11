import { Injectable } from "@angular/core";
import { Observable, Subject } from 'rxjs';
import { Alert } from './alert';

@Injectable()
export class AlertsCommunicationService {
    public alerts: Observable<Alert>;
    private subject: Subject<Alert>;

    constructor() {
        this.subject = new Subject();
        this.alerts = this.subject.asObservable();
    }

    public showAlert(alert: Alert): void {
        this.subject.next(alert);
    }
}
