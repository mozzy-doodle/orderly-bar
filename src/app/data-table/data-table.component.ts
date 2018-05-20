import { Component, OnInit , ViewChild} from '@angular/core';

import {MatTableDataSource, MatSort, MatBottomSheet, MatBottomSheetRef} from '@angular/material';

export interface Element {
  waiter: string;
  table: number;
  drink: number;
  ready: boolean;
  delivered: boolean;
}

const ELEMENT_DATA: Element[] = [
  {table: 1, waiter: 'Hydrogen', drink: 1.0079, ready: false, delivered: false },
  {table: 2, waiter: 'Helium', drink: 4.0026, ready: false, delivered: false },
  {table: 3, waiter: 'Lithium', drink: 6.941, ready: false, delivered: false },
  {table: 4, waiter: 'Beryllium', drink: 9.0122, ready: true, delivered: false },
  {table: 5, waiter: 'Boron', drink: 10.811, ready: true, delivered: true}
];

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  displayedColumns = ['table', 'waiter', 'drink', 'ready', 'delivered'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
