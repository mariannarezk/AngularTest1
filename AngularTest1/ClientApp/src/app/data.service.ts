import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public menuid: number;
  //these variables for the page edit category
  public categid; public categname; public categdescr; public categvisible; public cmenuid;
  constructor() { }
}
