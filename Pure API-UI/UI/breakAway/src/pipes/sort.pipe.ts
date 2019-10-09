import { Pipe, PipeTransform } from "@angular/core";
import { Customer } from "src/models/customer";
import { Activity } from 'src/models/activity';

@Pipe({ name: "sortColumns" })
export class SortPipe implements PipeTransform {
  transform(item: Array<Customer | Activity>, sortBy: string, reverse: boolean) {
    if (!sortBy || !item) {
      return item;
    }

    return item.sort((a: Customer | Activity, b: Customer | Activity) => {
      if (!a[sortBy] && !b[sortBy]) {
        return 0;
      } else if (!a[sortBy] && b[sortBy]) {
        return 1;
      } else if (a[sortBy] && !b[sortBy]) {
        return -1;
      }

      if (!reverse) {
        if (typeof a[sortBy] === "string") {
          let nameA = a[sortBy].toUpperCase();
          let nameB = b[sortBy].toUpperCase();

          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          return 0;
        } else {
          return b[sortBy] - a[sortBy];
        }
      } else {
        if (typeof a[sortBy] === "string") {
          let nameA = a[sortBy].toUpperCase();
          let nameB = b[sortBy].toUpperCase();

          if (nameA < nameB) {
            return 1;
          }
          if (nameA > nameB) {
            return -1;
          }

          return 0;
        } else {
          return a[sortBy] - b[sortBy];
        }
      }
    });
  }
}
