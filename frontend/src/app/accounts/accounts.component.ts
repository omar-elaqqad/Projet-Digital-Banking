import { Component, OnInit } from '@angular/core';
import {catchError, map, Observable, throwError} from "rxjs";
import {Customer} from "../model/customer.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Account} from "../model/account.model";
import {AccountService} from "../account.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  accounts! :Observable<Array<Account>>;
  errorMessage! : String
  searchFormGroup! :FormGroup
  constructor(private accountservice :AccountService, private fb :FormBuilder, private route:ActivatedRoute) {
    this.route.params.subscribe({
      next: re=>{
        this.accounts=this.accountservice.searchAccounts(re['customerId']).pipe(
          catchError(err => {
            this.errorMessage=err.message;
            return throwError(err);
          })
        );
      }
    })
  }

  ngOnInit(): void {
  }
  handleDeleteAccount(a: Account) {
    let conf=confirm("Are you sure ");
    if(!conf) return;
    this.accountservice.deleteAccount(a.id).subscribe({
      next : (qny )=>{
        this.accounts=this.accounts.pipe(
          map(resp=>{
            let index=resp.indexOf(a);
            resp.slice(index,1);
            return resp;
          })
        )
      },error :err => {
        console.log(err)
      }
    })
  }
}
