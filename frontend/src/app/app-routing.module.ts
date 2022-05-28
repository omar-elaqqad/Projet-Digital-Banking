import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from "./customers/customers.component";
import {AccountsComponent} from "./accounts/accounts.component";
import {NewCustomerComponent} from "./new-customer/new-customer.component";
import {HistoryComponent} from "./history/history.component";
import {SearchaccountComponent} from "./searchaccount/searchaccount.component";

const routes: Routes = [
  { path :"customers",component :CustomersComponent},
  { path :"account/:customerId",component :AccountsComponent},
  {path : "accounts",component :SearchaccountComponent},
  {path :"new-customer",component :NewCustomerComponent},
  {path: "account-history/:accountId",component:HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
