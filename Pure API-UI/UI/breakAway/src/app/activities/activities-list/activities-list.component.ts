import { Component, OnInit } from '@angular/core';

import { Activity, ActivityType } from 'src/models/activity';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css']
})
export class ActivitiesListComponent implements OnInit {
  public list: Array<Activity>;

  constructor(
    private activityService: ActivityService,
  ) { }

  public ngOnInit(): void {
    this.showCustomers();
  }

  showCustomers() {
    this.activityService.getActivities().subscribe(data => this.list = data);
  }
}
