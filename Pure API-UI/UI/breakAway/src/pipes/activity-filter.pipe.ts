import { Pipe, PipeTransform } from "@angular/core";
import { Activity } from "src/models/activity";

@Pipe({ name: "activityFilter" })
export class ActivityFilterPipe implements PipeTransform {
  transform(activities: Array<Activity>, filter: string) {
    if (!filter || !activities) {
      return activities;
    }

    return activities.filter(
      f =>
        f.name.indexOf(filter[0].toUpperCase() + filter.slice(1)) !== -1 ||
        f.category.indexOf(filter[0].toUpperCase() + filter.slice(1)) !== -1
    );
  }
}