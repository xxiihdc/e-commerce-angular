import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { constants } from 'src/app/services/const';
import { DataService } from 'src/app/services/data.service';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-product-list-custom',
  templateUrl: './product-list-custom.component.html',
  styleUrls: ['./product-list-custom.component.css']
})
export class ProductListCustomComponent implements OnInit {
  type:string = "";
  lstProduct:any;
  constructor(private router:ActivatedRoute, private data:DataService,private rest:RestService) {
    this.router.queryParams.subscribe(params => {
      this.type = params['type'];
      this.data.updateCategoryData(this.type);
    });
  }

  ngOnInit() {
    this.data.getCategoryData().subscribe(type=>{
      this.rest.get(constants.GET_PRODUCT_CUSTOM+"0"+"?type="+type).subscribe(resp=>{
        this.lstProduct = resp.data;
      })
    })
  }

}
