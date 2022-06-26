import { Component, OnInit } from '@angular/core';
import { AuthServiceCustom } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.css']
})
export class CartIconComponent implements OnInit {

  constructor(private rest: RestService, private auth: AuthServiceCustom, private data: DataService) { }
  sumItem: number = 0;
  lstItem: any;
  amount:number = 0;
  ngOnInit() {
    this.data.dataSource$.subscribe(arrData=>{
      this.lstItem = arrData;
      this.sumItem = arrData.length;
      this.amount = 0;
      for(let i = 0; i <this.sumItem; i++){
        this.amount+= (this.lstItem[i].product.unitPrice * (100-this.lstItem[i].product.discount) / 100) * this.lstItem[i].quantity
      }
    })

  }

}
