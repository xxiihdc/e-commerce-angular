import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthServiceCustom } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog:MatDialog,
              private auth:AuthServiceCustom,
              private data:DataService) { }
  showLogin(){
    this.dialog.open(LoginComponent,{panelClass: 'myCustomDialog'})
  }
  isLogin = false;
  name = "";
  ngOnInit() {
    this.isLogin= this.auth.isLogin();
    this.name = this.auth.getUsername();
  }
  logout(){
    localStorage.removeItem('token');
    location.reload();
  }
}
