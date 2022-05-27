import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../services/customer.service";
import {Customer} from "../model/customer.model";
import {catchError, map, Observable, throwError} from "rxjs";
import {FormGroup} from "@angular/forms";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers! :Observable<Array<Customer>>;
  errorMessage! : String
  searchFormGroup! :FormGroup
  constructor(private customerService : CustomerService, private fb :FormBuilder) { }

  ngOnInit(): void {
    this.searchFormGroup=this.fb.group({
      keyword: this.fb.control("")
    })
    this.handleSearchCustomers()

    this.customers=this.customerService.getCustomers().pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      })
    )
  }

  handleSearchCustomers() {
 let kw=this.searchFormGroup?.value.keyword
    this.customers=this.customerService.searchCustomers(kw).pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }

  handleDeleteCustomers(c: Customer) {
    let conf=confirm("Are you sure ");
    if(!conf) return;
  this.customerService.deleteCustomer(c.id).subscribe({
    next : (resp )=>{
      this.customers=this.customers.pipe(
        map(resp=>{
          let index=resp.indexOf(c);
          resp.slice(index,1);
          return resp;
        })
      )
      this.handleSearchCustomers()
    },error :err => {
      console.log(err)
    }
  })
  }

}
