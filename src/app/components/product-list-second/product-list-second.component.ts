import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list-second',
  templateUrl: './product-list-second.component.html',
  styleUrls: ['./product-list-second.component.css']
})
export class ProductListSecondComponent implements OnInit {
  listNewProduct:any;
  constructor(private service:ProductService) { }

  ngOnInit() {
    this.service.getNewProduct().subscribe(data => {
      this.listNewProduct = data.data;
  })
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
}
