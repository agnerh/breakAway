import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-customers-sort",
  templateUrl: "./customers-sort.component.html",
  styleUrls: ["./customers-sort.component.css"]
})
export class CustomersSortComponent implements OnInit {
  public variable: string;

  @Output() clickBtn = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  public variableChange(term: string) {
    this.variable = term;
    this.clickBtn.emit(this.variable);
  }

}
