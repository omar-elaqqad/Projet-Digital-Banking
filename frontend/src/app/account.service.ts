import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Operation} from "./model/Operation.model"
import {environment} from "../environments/environment";
import {Account} from "./model/account.model";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private  http:HttpClient) { }

  public getAccounts():Observable<Array<Account>>{
    return this.http.get<Array<Account>>(environment.backendHost+"/accounts")
  }

  public searchAccounts(id: number):Observable<Array<Account>>{
    return this.http.get<Array<Account>>(environment.backendHost+"/accounts/search/"+id)
  }

  public saveAccount(account : Account):Observable<Account>{
    return this.http.post<Account>(environment.backendHost+"/accounts",account)
  }

  public deleteAccount(id: Number){
    return this.http.delete(environment.backendHost+"/accounts/"+id)
  }

  public  getAccountOperaations(account :Account):Observable<Array<Operation>>{
    return  this.http.get<Array<Operation>>(environment.backendHost+"/accounts/{accountId}/operations"+account.id)

  }

}
