import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent {

  public items: any = [{
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
  },
    {
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
  },
    {
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
    },
    {
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
    },
    {
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
    }];

  constructor(private apiService: ApiService, private router: Router) {
  }
  navigateToBalance() {
    this.router.navigate(['/balance']);

  }
  navigateToRating() {
    this.router.navigate(['/transaction-rating']);

  }
  // ngOnInit() {
//     this.apiService.getTransactions()
//       .subscribe((result) => {
//         this.items = result;
//       },
// error => {
//         console.log('error: %o', error);
//       });
//   }
  }
