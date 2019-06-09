import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  public items = [1,2,3,4,5,6,7,8];

  constructor() { }

  ngOnInit() {
  }

}
