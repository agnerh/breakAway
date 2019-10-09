import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchComponent } from './search-components/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearchComponent,
  ],
  exports: [
    SearchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class SearchModule {}
