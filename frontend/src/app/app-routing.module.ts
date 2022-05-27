import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from "./customers/customers.component";
import {AccountsComponent} from "./accounts/accounts.component";
import {NewCustomerComponent} from "./new-customer/new-customer.component";
import {NewAccountComponent} from "./new-account/new-account.component";
import {HistoryComponent} from "./history/history.component";

const routes: Routes = [
  { path :"customers",component :CustomersComponent},
  { path :"account/:customerId",component :AccountsComponent},
  {path :"new-customer",component :NewCustomerComponent},
  {path :"new-account",component :NewAccountComponent},
  {path: "account-history",component:HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
