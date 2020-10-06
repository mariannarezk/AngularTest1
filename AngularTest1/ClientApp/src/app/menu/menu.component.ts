import { Component, OnInit , Inject} from '@angular/core';
import { MenusService } from '../menus.service';
import { DataService } from '../data.service';

import { Router, ActivatedRoute } from '@angular/router';
import { error } from '@angular/compiler/src/util';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',

  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public menus: any;
  displaycreate = false;
  showinitial = true;
  showedit = false;
  str_r: any;
  public currentMenu: any;
  public menuData: Array<any>;
  public menutitle: string = '';
  public menuactive: string = '';
  public menutitle2 = '';
  public menuid: number = -1;
  constructor(private router: Router, private menusService: MenusService, private dataService: DataService, private _avRoute: ActivatedRoute) {
    this.currentMenu = this.setInitialValuesForMenuData();
    this.showMenus();
  }
  public showMenus() {
    this.menusService.getMenus().subscribe(result => {
      this.menus = result;
    }), error => console.error(error);
  }
  private setInitialValuesForMenuData() {
    return {
      Menu_Id: undefined,
      Menu_Title: '',
      Menu_Active: ''
    }
  }
  public addmenu = function () {
    this.currentMenu.Menu_Title = this.menutitle;
    this.currentMenu.Menu_Active = this.menuactive;
   // this.displaycreate = false;
   // this.menutitle2 = this.menutitle;
    this.menusService.saveMenu(this.menutitle, this.menuactive);
   // this.menus.push(this.currentMenu);
    this.closeCreate();
 
  };
  public addmenu2 = function () {
    this.currentMenu.Menu_Title = this.menutitle;
    this.currentMenu.Menu_Active = this.menuactive;
    // this.displaycreate = false;
    // this.menutitle2 = this.menutitle;
    this.menusService.saveMenu2(this.menutitle, this.menuactive);
    // this.menus.push(this.currentMenu);
    this.closeCreate();

  };
  public deletemenu = function (menuid, menutitle, menuactive) {
    this.menuid = menuid;
    this.menutitle = menutitle;
    this.menuactive = menuactive;
    this.menusService.menuid = this.menuid;
    this.menusService.menutitle = this.menutitle;
    this.menusService.menuactive = this.menuactive;
    this.menusService.deleteMenu();
    window.location.reload();
  }
  public createMenu() {
    this.displaycreate = true;
  }

  public closeCreate() {
    this.displaycreate = false;
    this.showMenus();
   window.location.reload();//!!!IMPORTANT!!!
  
  }
  public editmenu(menuid,menutitle,menuactive) {
    this.menuid = menuid;
    this.menutitle = menutitle;
    this.menuactive = menuactive;
    this.menusService.menuid = this.menuid;
    this.menusService.menutitle = this.menutitle;
    this.menusService.menuactive = this.menuactive;
    this.dataService.menuid = menuid; 
    this.showedit = true;
    this.showinitial = false;
  }
  public assignmenuid(menuid) {
    this.dataService.menuid = menuid;
  }
  ngOnInit() {
  }

}
