import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {catchError, map, Observable, throwError} from "rxjs";
import {AccountService} from "../account.service";
import {Account} from "../model/account.model";

@Component({
  selector: 'app-searchaccount',
  templateUrl: './searchaccount.component.html',
  styleUrls: ['./searchaccount.component.css']
})
export class SearchaccountComponent implements OnInit {

  accounts! :Observable<Array<Account>>;
  errorMessage! : String
  searchaccountFormGroup! :FormGroup;

  constructor(private accountService:AccountService , private fb :FormBuilder) { }

  ngOnInit(): void {
  }
  handleSearchAccounts() {
    this.accounts=this.accountService.getAccounts().pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }

  handleDeleteAccount(a: Account) {
    let conf=confirm("Are you sure ");
    if(!conf) return;
    this.accountService.deleteAccount(a.id).subscribe({
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
