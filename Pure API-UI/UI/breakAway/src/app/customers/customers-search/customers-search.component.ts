import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customers-search',
  templateUrl: './customers-search.component.html',
  styleUrls: ['./customers-search.component.css']
})
export class CustomersSearchComponent implements OnInit {

  @Output() searchTerms = new EventEmitter<string>();

  constructor(private customerService: CustomerService) { }

  search(term: string) {
    this.searchTerms.emit(term);
  }

  // public variableChange(term: string): void {
  //   this.searchTerms.emit(term);
  // }

  ngOnInit(): void {

  }

}
