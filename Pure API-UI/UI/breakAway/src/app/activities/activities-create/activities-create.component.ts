import { Component, OnInit } from "@angular/core";

import { Activity } from "src/models/activity";
import { ActivityService } from "../activity.service";

@Component({
  selector: "app-activities-create",
  templateUrl: "./activities-create.component.html",
  styleUrls: ["./activities-create.component.css"]
})
export class ActivitiesCreateComponent implements OnInit {
  public input: Activity = new Activity();

  constructor(private activityService: ActivityService) {}

  ngOnInit() {}

  createActivity() {
    console.log(this.input);
    this.activityService
      .postActivity(this.input)
      .subscribe(data => (this.input = data));
  }
}
