import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer.model";
import {environment} from "../../environments/environment";
import {Account} from "../model/account.model";

@Injectable()
export class CustomerService {


  constructor(private  http:HttpClient){ }

  public getCustomers():Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(environment.backendHost+"/customers")
      }

   public getAccountsCustomers():Observable<Array<Account>>{
    return  this.http.get<Array<Account>>(environment.backendHost+"/accounts")
}

  public searchCustomers(keyword : String):Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(environment.backendHost+"/customers/search?keyword="+keyword)
  }

  public saveCustomer(customer : Customer):Observable<Customer>{
    return this.http.post<Customer>(environment.backendHost+"/customers",customer)
  }

  public deleteCustomer(id: Number){
    return this.http.delete(environment.backendHost+"/customers/"+id)
  }
}
