import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-or-update-menu',
  templateUrl: './add-or-update-menu.component.html',
  styleUrls: ['./add-or-update-menu.component.css']
})
export class AddOrUpdateMenuComponent implements OnInit {
  @Output() menuCreated = new EventEmitter<any>();
  @Input() menuInfo: any;
  constructor() {
    this.clearMenuInfo();
  }

  ngOnInit() {
  }
  private clearMenuInfo = function () {
    // Create an empty jogging object
    this.menuInfo = {
      Menu_Id: undefined,
      Menu_Title: '',
      Menu_Active: ''
    
    };
  };
  public addOrUpdateMenu = function (event) {
    this.menuCreated.emit(this.menuInfo);
    this.clearMenuInfo();
  };
}
