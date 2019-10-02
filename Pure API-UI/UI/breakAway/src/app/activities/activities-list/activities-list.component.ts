import { Component, OnInit } from '@angular/core';
import { Activity, ActivityType } from 'src/models/activity';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css']
})
export class ActivitiesListComponent implements OnInit {
  public list = activities;

  constructor() { }

  ngOnInit() {
  }

}

const activities: Activity[] = [
  {
    id: 1,
    title: "Activity 1",
    type: ActivityType.Standard
  },
  {
    id: 2,
    title: "Activity 2",
    type: ActivityType.Gold
  }

]
