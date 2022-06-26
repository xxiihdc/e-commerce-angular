import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-login-first',
  templateUrl: './login-first.component.html',
  styleUrls: ['./login-first.component.css']
})
export class LoginFirstComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }
  ok(){
    this.dialog.open(LoginComponent)
  }
}
