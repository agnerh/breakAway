import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-activities-sort",
  templateUrl: "./activities-sort.component.html",
  styleUrls: ["./activities-sort.component.css"]
})
export class ActivitiesSortComponent implements OnInit {
  public variable: string;

  @Output() clickBtn = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  public variableChange(term: string) {
    this.variable = term;
    this.clickBtn.emit(this.variable);
  }
}
