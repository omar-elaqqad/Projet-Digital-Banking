import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { TokenStorageService } from "../services/token-storage.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../services/customer.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  formGroup!:FormGroup;
  roles!:[{roleName:String}];

  constructor(private formBuilder:FormBuilder,
              private customerService:CustomerService,
              private router:Router,
              private authService: AuthService,
              private tokenStorage: TokenStorageService) {

    this.formGroup = formBuilder.group(
      {
        username:this.formBuilder.control("",[Validators.required]),
        password:this.formBuilder.control("",[Validators.required]),

      }
    )
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    if (this.isLoggedIn) {
      this.roles = this.tokenStorage.getUser().appRoles;
      this.router.navigateByUrl("/customers");

    }
  }

  login() {
    let customer = this.formGroup.value;
    this.authService.login(customer).subscribe({
      next:(data)=>{
        this.tokenStorage.saveToken(data.access_token);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          window.location.reload();
      },
      error:(err)=>{
        console.log(err)
        this.isLoginFailed = true;
        this.isLoggedIn = false;
      }
    });

  }

  reloadPage(): void {
    window.location.reload();
  }


}
