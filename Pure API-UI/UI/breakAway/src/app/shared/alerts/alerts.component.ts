import { Component, OnInit } from "@angular/core";
import { AlertsType, Alert } from './alert';
import { AlertsCommunicationService } from './alerts.commservice';

@Component({
  selector: "app-alerts",
  templateUrl: "./alerts.component.html",
  styleUrls: ["./alerts.component.css"]
})
export class AlertsComponent implements OnInit {
  public show: boolean = false;
  public Type = AlertsType;
  public alert: Alert = { type: AlertsType.Dark, message: "This is a message" };
  
  constructor(private alertService: AlertsCommunicationService) {}

  public ngOnInit() {
    this.alertService.alerts.subscribe(alert => console.log("Alert: ", alert));
  }

  public showAlert(): void {
    this.show = true;
  }
  
  public hideAlert(): void {
    this.show = false;
  }
}
