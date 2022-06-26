import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ResponseCustom } from '../interfaces/response';
import { constants } from '../services/const';
@Injectable({
  providedIn: 'root'
})

export class ProductService {
  constructor(private http: HttpClient) { }
  token = localStorage.getItem("token");
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': "Bearer " + this.token
  });
  options = { headers: this.headers };
  getProductUrl = "http://localhost:8080/product/";
  save(formData: NgForm): Observable<ResponseCustom> {
    return this.http.post<ResponseCustom>(constants.SAVE_PRODUCT, formData.value, this.options);
  }
  saveImg(id: number, img: any): Observable<ResponseCustom> {
    const fd: FormData = new FormData();
    fd.append("id", id + "");
    fd.append("file", img[0]);
    var multipartHeader = new HttpHeaders({
      'Authorization': "Bearer " + this.token
    });
    var options2 = { headers: multipartHeader }
    return this.http.post<ResponseCustom>(constants.UPLOAD_PRODUCT_IMAGE, fd, options2);
  }

  saveSubImg(id: number, img: any) {
    const fd: FormData = new FormData();
    fd.append("id", id + "");
    fd.append("document", img[0])
    fd.append("document", img[1])
    fd.append("document", img[2])
    var multipartHeader = new HttpHeaders({
      'Authorization': "Bearer " + this.token
    });
    var options2 = { headers: multipartHeader }
    return this.http.post<ResponseCustom>(constants.UPLOAD_SUB_IMAGE, fd, options2);
  }

  getNewProduct(): Observable<ResponseCustom> {
    return this.http.get<ResponseCustom>(constants.LIST_PRODUCT_NEW, this.options);
  }
  getCategoryOfProduct(): Observable<ResponseCustom> {
    return this.http.get<ResponseCustom>(constants.CATEGORY, this.options);
  }
  getProductNameById(id: string): Observable<ResponseCustom> {
    return this.http.get<ResponseCustom>(constants.GET_PRODUCT_BY_ID + id, this.options);
  }
  getProductPageAble(page: string) {
    return this.http.get<ResponseCustom>(constants.PAGE_ABLE_PRODUCT + page, this.options);
  }
  getProductStopBusiness(page: string) {
    return this.http.get<ResponseCustom>(constants.PAGE_ABLE_PRODUCT_STOP + page, this.options);
  }
  getSimilarProduct(productId: string) {
    return this.http.get<ResponseCustom>(constants.SIMILAR_PRODUCT_BY_CATEGORY_ID + productId, this.options);
  }
  getTopSaleProduct() {
    return this.http.get<ResponseCustom>(constants.GET_TOP_DISCOUNT_PRODUCT, this.options);
  }
  searchProduct(query: string, page?: string) {
    if (page != null) {
      return this.http.get<ResponseCustom>(constants.FIND_BY_KEY_WORD + query + "&page=" + page, this.options);
    }
    return this.http.get<ResponseCustom>(constants.FIND_BY_KEY_WORD + query, this.options);
  }
  getListStatus(): any[] {
    return [
      {
        "id": 0,
        "name": "Hide"
      },
      {
        "id": 1,
        "name": "Stop Business"
      },
      {
        "id": 2,
        "name": "Available"
      },
      {
        "id": 3,
        "name": "Pre Order"
      },
      {
        "id": 4,
        "name": "Out of Stock"
      }
    ];
  }
}
