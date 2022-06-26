import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthServiceCustom } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { PopupService } from 'src/app/services/popup-service.service';
import { RestService } from 'src/app/services/rest.service';
import { ItemDetailsComponent } from '../item-details/item-details.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() img:string;
  @Input() alt:string;
  @Input() name:string;
  @Input() price:number;
  @Input() sticker:string;
  @Input() id:number;
  @Input() discount:number;
  constructor(private dialog:MatDialog, private rest:RestService,
    private dataService: DataService, private auth: AuthServiceCustom,
    private popup: PopupService) {
    this.id = 8;
    this.img="";
    this.alt="";
    this.name ="Product Name not loading";
    this.price=0;
    this.discount = 0;
    this.sticker="";
   }

  ngOnInit() {

  }
  showFastView(id:number){
    this.dialog.open(ItemDetailsComponent,{
      'width': '640px',
      'height':'550px',
      data:{
        id : id
      }
    },
    );
  }
  addToCart(id:number){
    if(!this.auth.isLogin()){
      this.dialog.open(LoginComponent)
      return;
    }
    var transferObj = {
      "productId": id,
      "quantity": 1
    }
    const obj = JSON.stringify(transferObj);
    this.rest.addCartItem(obj).subscribe(data=>{
      this.dataService.updateDate(data.data)
      this.popup.show("Item is add to cart","Z-shop notification")
    });
  }

}
