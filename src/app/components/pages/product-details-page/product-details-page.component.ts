import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ProductService } from 'src/app/services/product.service';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css']
})
export class ProductDetailsPageComponent implements OnInit {
  public id:any = "0";
  similarProduct:any = "";
  constructor(private route: ActivatedRoute, private productService:ProductService, private router:Router,
    private data: DataService, private titleService:Title) { }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.productService.getSimilarProduct(this.id).subscribe(resp=>{
      this.similarProduct = resp.data;
    })
    this.route.params.subscribe(param=>{
      this.getProduct(param['id']);
    })
  }
  getProduct(id:string){
    this.data.updateProductData(parseInt(id));
  }

}
