import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { constants } from 'src/app/services/const';
import { DataService } from 'src/app/services/data.service';
import { PopupService } from 'src/app/services/popup-service.service';
import { ProductService } from 'src/app/services/product.service';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-cart-item-mini',
  templateUrl: './cart-item-mini.component.html',
  styleUrls: ['./cart-item-mini.component.css']
})
export class CartItemMiniComponent implements OnInit {
  constructor(private pService: ProductService, private rest: RestService, private popup: PopupService, private data: DataService) {
    this.id = 0;
    this.name = "";
    this.quantity = 0;
    this.unitPrice = 0;
    this.productId = 0;

  }
  imgSrc = "";
  @Input() id: number;
  @Input() name: string;
  @Input() quantity: number;
  @Input() unitPrice: number;
  @Input() productId: number;
  ngOnInit() {
    this.imgSrc = "http://localhost:8080/api/v1/image/" + this.productId
  }
  remove(id: number) {
    this.rest.delete(constants.DELETE_CART_ITEM + id).subscribe(resp => {
      this.popup.show("Delete Item in cart done", "Z-shop notification")
      this.data.updateDate(resp.data);
    })
  }

}
