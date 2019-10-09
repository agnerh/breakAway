import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesListComponent } from './activities-list/activities-list.component';
import { ActivitiesCreateComponent } from './activities-create/activities-create.component';

const activityRoutes: Routes = [
    { path: "activity", component: ActivitiesListComponent },
    { path: "create-activity", component: ActivitiesCreateComponent }
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