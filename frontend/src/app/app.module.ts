import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomersComponent } from './customers/customers.component';
import { AccountsComponent } from './accounts/accounts.component';
import {HttpClientModule} from "@angular/common/http";
import {CustomerService} from "./services/customer.service";
import {ReactiveFormsModule} from "@angular/forms";
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { HistoryComponent } from './history/history.component';
import { SearchaccountComponent } from './searchaccount/searchaccount.component';
import {LoginComponent} from "./login/login.component";
import {authInterceptorProviders} from "./utils/auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomersComponent,
    AccountsComponent,
    NewCustomerComponent,
    HistoryComponent,
    SearchaccountComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    CustomerService,
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
