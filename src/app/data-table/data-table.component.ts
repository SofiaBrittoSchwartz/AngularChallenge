import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  tableState: Observable<{data: any[], columns: any[]}>;

  vars = 'default';
  allowEdit = false;
  editedItem = null;
  editedItemIndex = -1;

  constructor(private store: Store<{data: any[], columns: any[]}>) {}

  ngOnInit() {
    this.tableState = this.store.select('table');
  }
}
