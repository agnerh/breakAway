import { Component, OnInit } from "@angular/core";

import { Activity } from "src/models/activity";
import { ActivityService } from "../activity.service";

@Component({
  selector: "app-activities-list",
  templateUrl: "./activities-list.component.html",
  styleUrls: ["./activities-list.component.css"]
})
export class ActivitiesListComponent implements OnInit {
  public list2: Array<Activity>;
  public filter: string;
  public sortBy: string;
  public reverse: boolean = false;

  constructor(private activityService: ActivityService) {}

  public ngOnInit(): void {
    this.showActivities();
  }

  showActivities() {
    this.activityService.getActivities().subscribe(data => (this.list2 = data));
  }

  addTerms(newTerm: string) {
    this.filter = newTerm;
  }

  orderBy(order: string) {
    if (this.sortBy === order) {
      this.reverse = !this.reverse;
    } else {
      this.reverse = false;
    }

    this.sortBy = order;
  }
}
