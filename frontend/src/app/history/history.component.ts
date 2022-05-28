import {Component, OnInit} from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {Customer} from "../model/customer.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Operation} from "../model/Operation.model";
import {AccountService} from "../account.service";
import {ActivatedRoute} from "@angular/router";
import {OperationService} from "../operation.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  ngOnInit(): void {
  }

  operations!: Observable<Array<Operation>>;
  errorMessage!: String
  searchFormGroup!: FormGroup

  constructor(private operationService: OperationService, private fb: FormBuilder, private route: ActivatedRoute) {
    this.route.params.subscribe({
      next: re => {
        this.operations = this.operationService.getAccountOperaations(re['accountId']).pipe(
          catchError(err => {
            this.errorMessage = err.message;
            return throwError(err);
          })
        );
      }
    })
  }
}
void {}
