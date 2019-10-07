import { Pipe, PipeTransform } from "@angular/core";
import { Customer } from "src/models/customer";
// import { CustomerType } from "src/models/customer";

@Pipe({ name: "customerSort" })
export class CustomerSortPipe implements PipeTransform {
  transform(customers: Array<Customer>, sortBy: string) {
    console.log(sortBy);

    if (!sortBy || !customers) {
      return customers;
    }

    // TODO: sort by 
    
  }
  //   transform(customers: Array<Customer>, sortBy: string) {
  //     // console.log(sortBy);
  //     // console.log(CustomerType[sortBy]);
  // ;
  //     if (!sortBy || !customers) {
  //       return customers;
  //     }

  //     // console.log(customers[CustomerType[sortBy]]);

  //     let arr = [];

  //     customers.forEach(element => {
  //       if (element.type === CustomerType[sortBy]) {
  //         arr.push(element);
  //         customers = arr;
  //       }
  //     });

  //     return customers;

  //   }
}
