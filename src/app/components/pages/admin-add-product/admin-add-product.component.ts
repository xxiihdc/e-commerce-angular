import { Component, OnInit, Optional } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { AddProductComponent } from '../../admin/add-product/add-product.component';
import { ItemDetailsComponent } from '../../item-details/item-details.component';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css']
})
export class AdminAddProductComponent implements OnInit {

  constructor(public dialog:MatDialog, private productService: ProductService,private route: ActivatedRoute) {}
  lstProduct:any //10 product
  page:any = "0";
  stop = false;
  lstStatus = this.productService.getListStatus();
  openDialog(id?:number ){
    console.log(id)
    if (typeof id !== 'undefined'){
      this.dialog.open(AddProductComponent, {
        data:{
          id: id
        },
        height: "600px",
        width: "750px"
      })
    }else{
      this.dialog.open(AddProductComponent, {
        height: "600px",
        width: "750px"
      })
    }
;
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.page = params['page'];
    });
    if(typeof this.page === 'undefined'){
        this.page="0";
    }
    this.productService.getProductPageAble(this.page).subscribe(resp=>{
      this.lstProduct = resp.data;
    });
  }
  jump(page:string){
    let pageNum = parseInt(page);
    if(pageNum<0) page = "0";
    if(pageNum>this.lstProduct.totalPages) page = this.lstProduct.totalPages;
    if (!this.stop){
      console.log("stop")
      this.productService.getProductPageAble(page).subscribe(resp=>{
        this.lstProduct = resp.data;
      });
      return;
    }
    this.productService.getProductStopBusiness(page).subscribe(resp=>{
      this.lstProduct = resp.data;
    });
  }
  jumpTo(evt: KeyboardEvent){
    var val = (evt.target as HTMLInputElement).value;
    this.jump(val);
  }
  stopBusiness(values:any){
    if(values.currentTarget.checked){
      this.stop = true;
      this.productService.getProductStopBusiness("0").subscribe(resp=>{
          this.lstProduct = resp.data;
      })
    }else{
      this.stop = false;
      this.productService.getProductPageAble("0").subscribe(resp=>{
        this.lstProduct = resp.data;
      });
    }
  }
}
