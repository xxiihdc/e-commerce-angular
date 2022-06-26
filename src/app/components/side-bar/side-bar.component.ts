import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  categories:any;
  constructor(private service: ProductService, private router:Router) {
    this.service.getCategoryOfProduct().subscribe(resp=>{
      this.categories = resp.data
    })
   }

  ngOnInit() {
  }
  navigateUrl(id:number){
    this.router.navigateByUrl("/products?type="+id);
  }
}
