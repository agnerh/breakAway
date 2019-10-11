import { Component, OnInit } from "@angular/core";
import { AlertsType, Alert } from './alert';

declare const $: any;

@Component({
  selector: "app-alerts",
  templateUrl: "./alerts.component.html",
  styleUrls: ["./alerts.component.css"]
})
export class AlertsComponent implements OnInit {
  public show: boolean = false;
  public Type = AlertsType;
  public alert: Alert = { type: AlertsType.Dark, message: "This is a message" };
  
  constructor() {}

  public ngOnInit() {
  }

  public showAlert(): void {
    this.show = true;
  }
  
  public hideAlert(): void {
    this.show = false;
  }
}
