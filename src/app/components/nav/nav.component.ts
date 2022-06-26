import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceCustom } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  categories: any;
  constructor(private auth: AuthServiceCustom, private router: Router,
    private dataService: DataService, private productService: ProductService) {
    this.productService.getCategoryOfProduct().subscribe(resp => {
      this.categories = resp.data
    })
  }
  isAdmin = false;
  key: string = "";
  ngOnInit() {
    this.isAdmin = this.auth.isAdmin();
  }
  search() {
    this.router.navigateByUrl("/search?query=" + this.key);
    this.dataService.updateSearchData(this.key);
  }
  navigateUrl(){
    this.router.navigateByUrl("/products?type=all");
  }
  navigate(id:number){
    this.router.navigateByUrl("/products?type="+id);
  }
}
