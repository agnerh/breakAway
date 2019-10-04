import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
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
