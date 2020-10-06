import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router'; 
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public _baseUrl: string;
  private headers: HttpHeaders;
  categname: string; categdescr: string; categvisible: string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseUrl = baseUrl;
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }
  getCategories(menuid) {
    return this.http.get(this._baseUrl + 'api/Categories/get/?menuid=' + menuid);
  }
  saveCategory(categoryname: string, categorydescription: string, categoryvisible: string, idmenu: number)
  {
    this.http.post<any>(this._baseUrl + 'api/Categories/Create', {
      CategName: categoryname, CategDescription: categorydescription,
      CategVisible: categoryvisible, MenuId: idmenu
    }).subscribe(data => {  });

  }
  editCategory(categid, categname, categdescr, categvisible, menuid) {
    this.http.post<any>(this._baseUrl + 'api/Categories/Edit', { CategId: categid, CategName: categname, CategDescription: categdescr, CategVisible: categvisible, MenuId: menuid }).subscribe(data => { console.log(data); });
  }
}
