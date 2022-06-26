import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private service: ProductService, private router:Router) { }

  ngOnInit() {
    this.getProductCategory();
  }
  listCategory: any;
  getProductCategory() {
    this.service.getCategoryOfProduct().subscribe(data => {
      this.listCategory = data.data;
      console.log(this.listCategory);
    })
  }
  navigateUrl(id:number){
    this.router.navigateByUrl("/products?type="+id);
  }
}
