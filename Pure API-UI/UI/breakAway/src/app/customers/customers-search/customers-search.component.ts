import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customers-search',
  templateUrl: './customers-search.component.html',
  styleUrls: ['./customers-search.component.css']
})
export class CustomersSearchComponent implements OnInit {
  public variable: string;

  @Output() searchTerms = new EventEmitter<string>();

  constructor() { }

  // search(term: string) {
  //   this.searchTerms.emit(term);
  // }

  public variableChange(term: string) {
    this.variable = term;
    this.searchTerms.emit(this.variable);
  }

  ngOnInit(): void {

  }

}
