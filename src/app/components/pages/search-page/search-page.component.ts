import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  keyWord: string = "";
  resultLst: any;
  constructor(private route: ActivatedRoute, private service: ProductService, private dataService: DataService) {
    this.route.queryParams.subscribe(params => {
      this.keyWord = params["query"];
      this.dataService.updateSearchData(this.keyWord);
    });
    this.service.searchProduct(this.keyWord).subscribe(resp => {
      this.resultLst = resp.data;
      console.log(this.resultLst);
    })
  }
  ngOnInit() {
    this.dataService.getSearchData().subscribe(data => {
      this.service.searchProduct(data as string).subscribe(resp => {
        this.resultLst = resp.data
      });
    })
  }
  searchAgain(){
    this.dataService.updateSearchData(this.keyWord)
  }

}
