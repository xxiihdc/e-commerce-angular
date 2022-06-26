import { Component, OnInit } from '@angular/core';
import { constants } from 'src/app/services/const';
import { PopupService } from 'src/app/services/popup-service.service';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {

  constructor(private rest:RestService, private popup:PopupService) {
    this.rest.get(constants.ADMIN_MANAGE_ORDER+"0").subscribe(resp=>{
      this.lstOrder = resp.data;
      console.log(this.lstOrder);
    })
   }

  lstOrder:any;
  ngOnInit() {
  }
  jump(page:string){

  }
  update(id:number){
    let select:any = document.getElementById("stt"+id);
    this.rest.put(constants.ADMIN_UPDATE_ORDER+id+"/"+select.value,"").subscribe(resp=>{
        if(resp.statusCode==200){
          this.popup.show("Update Status done!", "Z-shop notification")
        }else{
          this.popup.showDanger("Have some errors")
        }
    })
  }
}
