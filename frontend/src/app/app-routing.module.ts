import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from "./customers/customers.component";
import {AccountsComponent} from "./accounts/accounts.component";
import {NewCustomerComponent} from "./new-customer/new-customer.component";
import {HistoryComponent} from "./history/history.component";
import {SearchaccountComponent} from "./searchaccount/searchaccount.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./utils/auth-guard";

const routes: Routes = [
  { path :"customers",component :CustomersComponent,canActivate:[AuthGuard]},
  { path :"login",component :LoginComponent},
  { path :"account/:customerId",component :AccountsComponent,canActivate:[AuthGuard]},
  {path : "accounts",component :SearchaccountComponent,canActivate:[AuthGuard]},
  {path :"new-customer",component :NewCustomerComponent,canActivate:[AuthGuard]},
  {path: "account-history/:accountId",component:HistoryComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
