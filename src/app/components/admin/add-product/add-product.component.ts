import { Component, Inject, OnInit, Optional } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/interfaces/product';
import { ResponseCustom } from 'src/app/interfaces/response';
import { PopupService } from 'src/app/services/popup-service.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: { id: number },
    private service: ProductService, private dialog: MatDialog, private popup: PopupService) { }
  url: any = "https://redzonekickboxing.com/wp-content/uploads/2017/04/default-image-620x600.jpg";
  ngOnInit() {
    this.getProductCategory();
    if (this.data != null) {
      this.url = "http://localhost:8080/api/v1/image/"+this.data.id;
      this.service.getProductNameById(this.data.id+"").subscribe(resp =>{
        this.product = resp.data as Product;
        //console.log(this.product)
      })
    } else {
      this.product = {
        id: 0, name: "", quantity: 0, unitPrice: 0, description: "", discount: 0, status: -1, enteredDate: new Date().getTime(),
        categoryId: -1
      }
    }
  }
  close() {
    this.dialog.closeAll();
  }
  product: Product = {
    id: 0, name: "", quantity: 0, unitPrice: 0, description: "", discount: 0, status: -1, enteredDate: new Date().getTime(),
    categoryId: -1
  }
  listStatus = this.service.getListStatus();
  listCategory: any;
  onSubmit(form: NgForm, img: any,subImg: any) {
    console.log(form.value)
    this.service.save(form).subscribe(data => {
      const res = data as ResponseCustom;
      const product = res.data as Product;
      const id = product.id;
      this.service.saveImg(id, img).subscribe(data2 => {
      });
    this.service.saveSubImg(id,subImg).subscribe(resp=>{
      console.log(resp);
    });
    })

    this.dialog.closeAll();
    this.popup.show("Add product done", "Z-shop notification")

  }
  getProductCategory() {
    this.service.getCategoryOfProduct().subscribe(data => {
      this.listCategory = data.data;
      //console.log(this.listCategory);
    })
  }
  readUrl(event: any) {
    console.log("read img")
    //  var mimeType = event.target.files[0].type;
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.url = reader.result;
    }
  }
  multipleChange(evt: any){
    let files = [].slice.call(evt.target.files);
    console.log(files)
  }
  cancel(){
    this.dialog.closeAll();
  }
}
