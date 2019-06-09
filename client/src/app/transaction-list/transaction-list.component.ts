import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  public items: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getTransactions()
      .subscribe((result) => {
        this.items = result;
      },
error => {
        console.log('error: %o', error);
      });
  }
}
