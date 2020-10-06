import { Component, OnInit , Inject} from '@angular/core';
import { PagesService } from '../pages.service';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  public pages: any;
  public str: any;
  str2: string;
  constructor(private router: Router, private pagesService: PagesService) {
    this.pagesService.getPages().subscribe(result => {
      this.pages = result;
    }), error => console.error(error);
   
    this.str2 = "vv";
  }

  ngOnInit() {
  }

}
