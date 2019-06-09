import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateBack() {
    this.router.navigate(['']);
  }
}
