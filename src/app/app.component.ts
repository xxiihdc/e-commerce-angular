import { Component, OnInit } from '@angular/core';
import { AuthServiceCustom } from './services/auth.service';
import { constants } from './services/const';
import { DataService } from './services/data.service';
import { PopupService } from './services/popup-service.service';
import { RestService } from './services/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private auth:AuthServiceCustom,
    private rest:RestService,
    private data:DataService,
    private popup: PopupService){
    console.log("Hmm")
  }
  ngOnInit(): void {
   console.log("Page init")
   if(this.auth.isLogin()){
    this.rest.get(constants.GET_CART_ITEM_BY_USER).subscribe(response =>{
      const lstCartItem = response.data;
      this.data.updateDate(lstCartItem);
      this.popup.show('Login success','Z-shop message')
      });
  }
}

  title = 'e-commerce-shop';
}
