import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../services/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogin = false;

  constructor( private tokenStorage: TokenStorageService,
               private route:Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()){
      this.isLogin = true;
    }
  }

}
