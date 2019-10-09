import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ActivitiesListComponent } from "./activities-list/activities-list.component";
import { ActivityRoutingModule } from "./activities-routing.module";
import { ActivitiesCreateComponent } from "./activities-create/activities-create.component";
import { ActivitiesSortComponent } from "./activities-sort/activities-sort.component";
import { SearchModule } from '../search/search.module';
import { ActivityFilterPipe } from 'src/pipes/activity-filter.pipe';

@NgModule({
  declarations: [
    ActivitiesListComponent,
    ActivitiesCreateComponent,
    ActivitiesSortComponent,
    ActivityFilterPipe
  ],
  imports: [
    CommonModule,
    ActivityRoutingModule,
    FormsModule,
    SearchModule,
  ]
})
export class ActivitiesModule {}
