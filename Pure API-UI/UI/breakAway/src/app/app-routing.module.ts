import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // { path: "/", redirectTo: "home/home-main", pathMatch: "full" },
  { path: "home/home-main", redirectTo: "/home", pathMatch: "full" },
  { path: "customers/customers-list", redirectTo: "/customer", pathMatch: "full" },
  { path: "activities/activities-list", redirectTo: "/activity", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
