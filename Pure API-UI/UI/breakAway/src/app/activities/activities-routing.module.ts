import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesListComponent } from './activities-list/activities-list.component';

const activityRoutes: Routes = [
    { path: "activity", component: ActivitiesListComponent },
]

@NgModule({
    imports: [
        RouterModule.forRoot(activityRoutes),
    ],
    exports: [
        RouterModule
    ]
})
export class ActivityRoutingModule { }