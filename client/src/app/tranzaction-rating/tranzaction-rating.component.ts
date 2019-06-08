import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-tranzaction-rating',
  templateUrl: './tranzaction-rating.component.html',
  styleUrls: ['./tranzaction-rating.component.scss']
})
export class TranzactionRatingComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }


  ratingSubmit(ratingForm: NgForm) {
    this.router.navigate(['']);
    this.apiService.rateTransaction(ratingForm.value)
      .subscribe((result) => {
          console.log('result %o', result);
        },
      error => {
        console.log('error: %o', error);
      });
  }

}
