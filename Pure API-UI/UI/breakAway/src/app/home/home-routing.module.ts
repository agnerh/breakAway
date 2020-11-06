import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HomeMainComponent } from './home-main/home-main.component';

const homeRoutes: Routes = [
    { path: "home", component: HomeMainComponent},
]

@NgModule({
    imports: [
        RouterModule.forRoot(homeRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule { }