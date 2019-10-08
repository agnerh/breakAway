import { Pipe, PipeTransform } from "@angular/core";
import { Customer } from "src/models/customer";

@Pipe({ name: "customerSort" })
export class CustomerSortPipe implements PipeTransform {
  transform(customers: Array<Customer>, sortBy: string, reverse: boolean) {
    if (!sortBy || !customers) {
      return customers;
    }

    return (customers = customers.sort((a: Customer, b: Customer) => {
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
    }));
  }
}
