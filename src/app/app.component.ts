import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
// import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  items: MenuItem[];
  activeItem: MenuItem;

  @ViewChild('menuItems') menu: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {label: 'Staff Type', icon: 'fa fa-plus'},
      {label: 'Contact Centers', icon: 'fa fa-plus'},
      {label: 'Computers & Phones', icon: 'fa fa-download'}
    ];
    this.activeItem = this.items[0];
  }

  activateMenu(index: number) {
    // this.activeItem = this.menu['activeItem'];
    this.activeItem = this.items[index];
  }

  onClick() {
    console.log(this.activeItem);
    // console.log(elem);
    // console.log(typeof(elem));
    // console.log(elem.active);
    // elem.nativeElement.active = !elem.nativeElement.active;
  }


}
