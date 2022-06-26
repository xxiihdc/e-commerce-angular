import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceCustom } from 'src/app/services/auth.service';

@Component({
  selector: 'app-google-test',
  templateUrl: './google-test.component.html',
  styleUrls: ['./google-test.component.css']
})
export class GoogleTestComponent implements OnInit {
  public id: any;

  constructor(private auth: AuthServiceCustom,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.auth.setToken(this.id);
    window.location.href= "http://localhost:4200";
  }

}
