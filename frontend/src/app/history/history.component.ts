import {Component, OnInit} from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {Customer} from "../model/customer.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Operation} from "../model/Operation.model";
import {AccountService} from "../account.service";
import {ActivatedRoute} from "@angular/router";
import {OperationService} from "../operation.service";
import {AccountDetails} from "../model/account.model";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  ngOnInit(): void {
  }

  errorMessage!: String
  searchFormGroup!: FormGroup
  currentPage :number = 0;
  pageSize :number = 5;
  accountObservable! : Observable<AccountDetails>
  accountId!:string;

  constructor(private operationService: OperationService, private fb: FormBuilder, private route: ActivatedRoute) {
    this.route.params.subscribe({
      next: re => {
        this.accountId = re['accountId'];
        this.searchAccountByID()
      }
    })
  }

  searchAccountByID() {
    if (!this.accountId)return;
    this.accountObservable=this.operationService.getAccount(this.accountId,this.currentPage, this.pageSize)
      .pipe(

        catchError(err => {
          this.errorMessage=err.message;
          return throwError(err);
        })
    );


  }

  toPage(page: number) {
    this.currentPage=page;
    this.searchAccountByID();
  }
}

