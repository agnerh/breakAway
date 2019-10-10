import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ActivityRoutingModule } from "./activities-routing.module";
import { ActivitiesListComponent } from "./activities-list/activities-list.component";
import { ActivitiesCreateComponent } from "./activities-create/activities-create.component";
import { ActivitiesSortComponent } from "./activities-sort/activities-sort.component";

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ActivitiesListComponent,
    ActivitiesCreateComponent,
    ActivitiesSortComponent,
  ],
  imports: [
    CommonModule,
    ActivityRoutingModule,
    FormsModule,
    SharedModule,
  ]
})
export class ActivitiesModule {}
