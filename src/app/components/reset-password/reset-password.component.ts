import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { constants } from 'src/app/services/const';
import { PopupService } from 'src/app/services/popup-service.service';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private route: ActivatedRoute, private rest:RestService,private router:Router, private popup:PopupService) { }
  id:string="";
  ngOnInit() {
    this.route.params.subscribe(param=>{
      this.id = param['id'];
      this.rest.get(constants.CHECK_TOKEN+this.id).subscribe(resp=>{
          if(resp.statusCode==404){
            this.popup.showDanger("Token is Invalid")
            this.router.navigateByUrl("/home")
            return;
          }
      })
    })
  }

}
