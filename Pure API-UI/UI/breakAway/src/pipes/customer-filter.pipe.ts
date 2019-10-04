import { Pipe, PipeTransform } from "@angular/core";
import { Customer } from 'src/models/customer';

@Pipe({ name: 'customerFilter' })
export class CustomerFilterPipe implements PipeTransform {

    // transform(customers: Array<Customer>, filter: string) {
    transform(customers: Array<Customer>, prop: keyof Customer, value: string | number | boolean) {
        if (!value || !customers) {
            return customers;
        }

        const filter = this.getFilter(value);
        return customers.filter(filter);

        // return customers.filter(f => f.firstName.indexOf(filter.charAt(0).toUpperCase() + filter.slice(1)) !== -1 || f.lastName.indexOf(filter.charAt(0).toUpperCase() + filter.slice(1)) !== -1);
    }

    getFilter(value: string | number | boolean): (value: any) => Array<any> {
        if (typeof(value) === "string") {
            return this.stringFilter;
        } else if (typeof(value) === "number") {
            return this.numberFilter;
        } else {
            return this.booleanFilter;
        }
    } 

    stringFilter(item: any, prop: string, value: string): boolean {
        item[prop].toLowerCase() === value.toLowerCase();
    }

}