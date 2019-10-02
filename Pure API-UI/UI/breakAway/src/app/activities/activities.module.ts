import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesListComponent } from './activities-list/activities-list.component';
import { ActivityRoutingModule } from './activities-routing.module';



@NgModule({
  declarations: [ActivitiesListComponent],
  imports: [
    CommonModule,
    ActivityRoutingModule
  ]
})
export class ActivitiesModule { }
