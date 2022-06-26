import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { constants } from 'src/app/services/const';
import { DataService } from 'src/app/services/data.service';
import { PopupService } from 'src/app/services/popup-service.service';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor(private dialog:MatDialog, private popup:PopupService, private rest:RestService,private data:DataService) { }

  ngOnInit() {
  }
  send(form:NgForm){
    if(form.valid){
      this.rest.post(constants.CHECK_OUT,form.value).subscribe(resp=>{
        console.log(resp);
        this.dialog.closeAll();
        this.popup.show("Your order will be accept soon","Z-shop notification")
        this.rest.get(constants.GET_CART_ITEM_BY_USER).subscribe(response =>{
          const lstCartItem = response.data;
          this.data.updateDate(lstCartItem);
          });
      });

    }else{
      this.popup.showDanger("Please enter full information")
    }
  }
  close(){
    this.dialog.closeAll();
  }

}
