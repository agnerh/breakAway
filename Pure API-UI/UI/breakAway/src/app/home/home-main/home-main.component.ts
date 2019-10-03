import { Component, OnInit } from '@angular/core';

import { Customer } from 'src/models/customer';
import { Activity } from 'src/models/activity';
import { CustomerService } from 'src/app/customers/customer.service';
import { ActivityService } from 'src/app/activities/activity.service';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css'],
})
export class HomeMainComponent implements OnInit {
  title = 'breakAway';
  public list1: Array<Customer>;
  public list2: Array<Activity>;

  constructor(
    private customerService: CustomerService,
    private activityService: ActivityService,
  ) { }

  public ngOnInit(): void {
    this.showCustomers();
    this.showActivities();
  }

  showCustomers() {
    this.customerService.getCustomers().subscribe(data => this.list1 = data);
  }

  showActivities() {
    this.activityService.getActivities().subscribe(data => this.list2 = data);
  }

}
