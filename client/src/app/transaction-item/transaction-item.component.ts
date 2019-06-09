import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.scss']
})
export class TransactionItemComponent implements OnInit {

  // @Input() transactionItem: object;

  constructor() {}

  public transactionItem = {
    "transactionId": "string",
    "entryReference": "string",
    "endToEndId": "string",
    "mandateId": "string",
    "checkId": "string",
    "creditorId": "string",
    "bookingDate": "2019-06-08",
    "valueDate": "2019-06-08",
    "transactionAmount": {
      "currency": "EUR",
      "amount": "123"
    },
    "isReceived": true,
    "rating": 3,
    "category": {
      "key": "utilities",
      "name": "Utilities"
    },
    "creditorName": "Creditor Name",
    "creditorAccount": {
      "iban": "FR7612345987650123456789014",
      "pan": "5409050000000000",
      "maskedPan": "123456xxxxxx1234",
      "currency": "EUR"
    },
    "debtorName": "Debtor Name",
    "debtorAccount": {
      "iban": "FR7612345987650123456789014",
      "pan": "5409050000000000",
      "maskedPan": "123456xxxxxx1234",
      "currency": "EUR"
    }
  };

  public transactionCategoryIcon() {
    return 'category-icon-' + this.transactionItem.category.key;
  }

  ngOnInit() {
  }
}
