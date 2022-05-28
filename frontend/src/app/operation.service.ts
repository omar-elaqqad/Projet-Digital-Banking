import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Account} from "./model/account.model";
import {Observable} from "rxjs";
import {Operation} from "./model/Operation.model";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  constructor( private  http:HttpClient) { }

  public  getAccountOperaations(id :Number):Observable<Array<Operation>>{
    return  this.http.get<Array<Operation>>(environment.backendHost+"/accounts/"+id+"/operations")

  }

}
