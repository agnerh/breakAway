import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { SearchComponent } from "./search-components/search.component";
import { SortPipe } from "src/app/shared/sort.pipe";
import { FilterPipe } from './filter.pipe';
import { TooltipDirective } from './tooltip.directive';
import { AlertsComponent } from './alerts/alerts.component';

@NgModule({
  declarations: [
    SearchComponent,
    SortPipe,
    FilterPipe,
    TooltipDirective,
    AlertsComponent
  ],
  exports: [
    SearchComponent,
    SortPipe,
    FilterPipe,
    TooltipDirective,
    AlertsComponent
  ],
  imports: [
    CommonModule, 
    FormsModule]
})
export class SharedModule {}
