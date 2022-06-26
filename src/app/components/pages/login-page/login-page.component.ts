import { Component, OnInit } from '@angular/core';
import { AuthServiceCustom } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private auth:AuthServiceCustom) { }
  token:string="";
  ngOnInit() {
  }
  send(){
    this.auth.setToken(this.token);
  }
}
