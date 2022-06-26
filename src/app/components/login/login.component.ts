import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceCustom } from 'src/app/services/auth.service';
import { constants } from 'src/app/services/const';
import { DataService } from 'src/app/services/data.service';
import { LoginService } from 'src/app/services/login.service';
import { PopupService } from 'src/app/services/popup-service.service';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  errMsg: string = '';
  public link = constants.LOGIN_GOOGLE_LINK;
  constructor(private loginService: LoginService,
    private dialog:MatDialog,private popup:PopupService,
    private data:DataService,
    private rest:RestService,
    private auth:AuthServiceCustom) {}
    lstCartItem:any;
  login(form: NgForm) {
    this.loginService.login(form).subscribe((data) => {
      localStorage.setItem('token', data.data as string);
      if (data.statusCode != 200) {
        this.errMsg ='Username or password is invalid, please try again';
      }else{
          this.dialog.closeAll();
          localStorage.setItem('token',data.data as string);
          this.rest.get("http://localhost:8080/cart/" + this.auth.getUserId()).subscribe(response =>{
          this.lstCartItem = response.data;
          this.data.updateDate(this.lstCartItem);
          console.log("login work")
          console.log(this.lstCartItem);
          });
          location.reload();
        }

    });
  }
  keyPress(event: KeyboardEvent,form: NgForm) {
    if(event.key == "Enter"){
      this.login(form);
    }

}
  ngOnInit() {}
}
