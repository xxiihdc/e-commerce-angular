import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/interfaces/product';
import { AuthServiceCustom } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { PopupService } from 'src/app/services/popup-service.service';
import { ProductService } from 'src/app/services/product.service';
import { RestService } from 'src/app/services/rest.service';
import { Optional } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  @Input() id: number;
  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: { id: number },
      private popup: PopupService,
      private dialog: MatDialog,
      private auth: AuthServiceCustom,
      private pService: ProductService,
      private rest: RestService,
      private dataService: DataService,
      private titleService:Title) {
    this.id = 1;
  }
  product: Product = {
    id: 1, name: "", quantity: 0, unitPrice: 0, description: "", discount: 0, status: -1, enteredDate: new Date().getTime(),
    categoryId: -1
  }
  cartId: any;
  realPrice = 0;
  imgSrc = "http://localhost:8080/api/v1/image/1" //+ this.data.id;
  quantity = 1;
  ngOnInit() {
    if (this.data != null) { //open dialog
      this.id = this.data.id;
      this.getProduct(this.id);
    }else{
      this.dataService.getProductData().subscribe(data=>{
        this.id = data;
        this.getProduct(this.id);
      })
    }
  }
  addToCart() {
    if (this.auth.isLogin()) {
      var transferObj = {
        "productId": this.product.id,
        "quantity": this.quantity,
      }
      const obj = JSON.stringify(transferObj);

      this.rest.addCartItem(obj).subscribe(data => {
        this.dataService.updateDate(data.data)
        this.dialog.closeAll()
        this.popup.show("Item was added to cart", "Z-shop notification")
      });
    }else{
      this.dialog.open(LoginComponent);
    }
  }
  getProduct(id:number){
    this.pService.getProductNameById(id+"").subscribe(res => {
      this.product = res.data as Product;
      console.log(this.product);
      this.realPrice = this.product.unitPrice - this.product.unitPrice * (this.product.discount / 100);
      this.realPrice = parseFloat(this.realPrice.toFixed(2));
      this.imgSrc = "http://localhost:8080/api/v1/image/" + this.id;
      if(this.data==null){
        this.titleService.setTitle(this.product.name +" | Z-shop")
      }
    });
  }
}
