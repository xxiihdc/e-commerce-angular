import { Component, OnInit } from '@angular/core';
import { constants } from 'src/app/services/const';
import { DataService } from 'src/app/services/data.service';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  constructor(private rest:RestService, private data:DataService) {
      this.rest.get(constants.GET_ORDERS_BY_CUSTOMER).subscribe(resp=>{
        this.lst = resp.data;
        console.log(this.lst);
      })
   }
  lst:any
  status = this.data.lstOrderStatus;
  ngOnInit() {
  }

}
