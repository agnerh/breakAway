import { Pipe, PipeTransform } from "@angular/core";
import { Customer } from "src/models/customer";

@Pipe({ name: "customerFilter" })
export class CustomerFilterPipe implements PipeTransform {
  transform(customers: Array<Customer>, filter: string) {
    // console.log(customers.filter(f => f.firstName.indexOf(filter)));
    if (!filter || !customers) {
      return customers;
    }

    return customers.filter(
      f =>
        f.firstName.indexOf(filter[0].toUpperCase() + filter.slice(1)) !== -1 ||
        f.lastName.indexOf(filter[0].toUpperCase() + filter.slice(1)) !== -1
    );
  }
}
