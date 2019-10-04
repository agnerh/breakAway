import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/models/customer';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customersUrl = '/api/customer';

  constructor(
    private http: HttpClient
  ) {}


  getCustomers() {
    return this.http.get<Array<Customer>>(this.customersUrl);
  }
}