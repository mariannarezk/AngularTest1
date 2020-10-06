import { Injectable , Inject } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

import { Router } from '@angular/router';  


@Injectable({
  providedIn: 'root'
})
export class MenusService {
  number: number;
  public _baseUrl: string;
  public menuid: any;
  public menutitle: string;
  public menuactive: string;
  private accessPointUrl: string = 'http://localhost:44317/api/menus';
  private headers: HttpHeaders;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseUrl = baseUrl;
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }
  getMenus() {
    return this.http.get(this._baseUrl + 'api/menus');
  }
  saveMenu(menutitle: string, menuactive: string) {
    this.http.post<any>(this._baseUrl + 'api/menus/', { Menu_Title: menutitle, Menu_Active: menuactive }).subscribe(data => { this.getMenus(); });
   
  }
  saveMenu2(menutitle: string, menuactive: string) {
    this.http.post<any>(this._baseUrl + 'api/menus/save', { Menu_Title: menutitle, Menu_Active: menuactive }).subscribe(data => { this.getMenus(); });

  }
  editMenu() {
    this.http.put<any>(this._baseUrl + 'api/menus/', { Menu_Id: this.menuid, Menu_Title: this.menutitle, Menu_Active: this.menuactive }).subscribe(data => { console.log(data); });
  }
  deleteMenu() {
    this.http.post<any>(this._baseUrl + 'api/menus/delete', { Menu_Id: this.menuid, Menu_Title: this.menutitle, Menu_Active: this.menuactive }).subscribe(data => { console.log(data); });

  }
 
}
