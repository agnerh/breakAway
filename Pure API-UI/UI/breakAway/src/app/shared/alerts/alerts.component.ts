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
  public alert: Alert;
  
  constructor(private alertService: AlertsCommunicationService) {}

  public ngOnInit() {
    this.alertService.alerts.subscribe(alert => {
      this.showAlert();
      this.alert = alert;
    });
  }

  public showAlert(): void {
    this.show = true;
  }
  
  public hideAlert(): void {
    this.show = false;
  }
}
