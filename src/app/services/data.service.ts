import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  public dataSource$ = new BehaviorSubject<any>([]);
  public dataSourceUser$ = new BehaviorSubject<string>("");
  public dataSourceProductId$ = new BehaviorSubject<number>(0);
  public dataSourceSearch$ = new BehaviorSubject<String>("");
  public dataSourceCategory$ = new BehaviorSubject<String>("");
  currentData = this.dataSource$.asObservable();
  updateDate(data: any) {
    this.dataSource$.next(data);
  }
  getData(): Observable<any> {
    return this.currentData;
  }
  updateStringData(data: string) {
    this.dataSourceUser$.next(data);
  }
  getStringData(): Observable<String> {
    return this.dataSourceUser$;
  }
  getCurrentProductData() {
    return this.dataSourceProductId$.asObservable();
  }
  updateProductData(id: number) {
    this.dataSourceProductId$.next(id);
  }
  getProductData() {
    return this.dataSourceProductId$;
  }
  getSearchData(){
    return this.dataSourceSearch$;
  }
  updateSearchData(key:string){
    this.dataSourceSearch$.next(key);
  }
  getCategoryData(){
    return this.dataSourceCategory$;
  }
  updateCategoryData(key:string){
    this.dataSourceCategory$.next(key);
  }


  lstOrderStatus =[
    {
      id: 0,
      name: "Cancel"
    },
    {
      id: 1,
      name: "Waiting for confirm"
    },
    {
      id: 2,
      name: "Delivery"
    },
    {
      id: 3,
      name: "Done"
    }
  ]

}
