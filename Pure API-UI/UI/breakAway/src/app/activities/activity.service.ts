import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Activity } from "src/models/activity";

@Injectable({
  providedIn: "root"
})
export class ActivityService {
  activitiesUrl = "/api/activities";

  constructor(private http: HttpClient) {}

  getActivities() {
    return this.http.get<Array<Activity>>(this.activitiesUrl);
  }

  
  postActivity(activity: Activity) {
    return this.http.post<Activity>(this.activitiesUrl, activity);
  }
}
