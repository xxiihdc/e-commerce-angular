import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { PopupService } from 'src/app/services/popup-service.service';
import { RestService } from 'src/app/services/rest.service';
import { AddressComponent } from '../../address/address.component';


/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.css']
})
export class ShoppingCartPageComponent implements OnInit {
  constructor(private rest: RestService, private data: DataService, private dialog: MatDialog
    ,private router: Router, private popup:PopupService) { }
  lstItem: any = [];
  subTotal: number = 0;
  ngOnInit(): void {
    this.data.dataSource$.subscribe(arrData => {
      this.lstItem = arrData;
      for (let i = 0; i < arrData.length; i++) {
        this.subTotal += (arrData[i].product.unitPrice - (arrData[i].product.unitPrice/100)*arrData[i].product.discount  ) * arrData[i].quantity
        this.subTotal = parseFloat(this.subTotal.toFixed(2));
      }
      console.log(this.subTotal)
    })
  }
  checkout() {
    if(this.subTotal==0){
      this.popup.showDanger("Mua hang da nhe ♥")
      return;
    }
    this.dialog.open(AddressComponent, {
      height: "550px",
      width: "650px"
    })
  }
  continueShopping(){
    this.router.navigateByUrl("/home")
  }
}
