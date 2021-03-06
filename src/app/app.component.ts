import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';

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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    console.log('log app.component.ts on init');
  }
}
