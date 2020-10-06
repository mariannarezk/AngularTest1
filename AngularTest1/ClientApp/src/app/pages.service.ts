import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PagesService {
  public _baseUrl: string;
  public str: any;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseUrl = baseUrl;
  }
  getPages() {
    return this.http.get(this._baseUrl + 'api/pages');
  }

}
