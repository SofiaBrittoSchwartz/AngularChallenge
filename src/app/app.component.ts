import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {label: 'Staff Type', icon: 'fa fa-plus'},
      {label: 'Contact Centers', icon: 'fa fa-plus'},
      {label: 'Computers & Phones', icon: 'fa fa-download'}
    ];
  }
}
