import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { SearchComponent } from "./search-components/search.component";
import { SortPipe } from "src/app/shared/sort.pipe";
import { FilterPipe } from './filter.pipe';
import { TooltipDirective } from './tooltip.directive';

@NgModule({
  declarations: [
    SearchComponent,
    SortPipe,
    FilterPipe,
    TooltipDirective
  ],
  exports: [
    SearchComponent,
    SortPipe,
    FilterPipe,
    TooltipDirective
  ],
  imports: [
    CommonModule, 
    FormsModule]
})
export class SharedModule {}
