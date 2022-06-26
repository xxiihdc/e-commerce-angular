import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductItemComponent } from '../components/product-item/product-item.component';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

constructor(private toast: ToastrService) { }
show(msg:string,title:string){
  this.toast.success(msg,title,{
    closeButton:true,
    progressBar:true,
    positionClass:"toast-top-left"
  })
}
showDanger(msg:string){
  this.toast.error(msg,"Z-shop notification",{
    closeButton:true,
    progressBar:true,
    positionClass:"toast-top-left"
  });
}
}
