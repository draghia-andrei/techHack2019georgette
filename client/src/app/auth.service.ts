import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private apiService: ApiService) {}

  isLoggedIn = false;

  checkAuth() {
    return this.isLoggedIn;
  }

  login(email, password) {
    this.apiService.login(email, password)
      .subscribe((result) => {
          console.log('result %o', result);
          this.isLoggedIn = true;
        },
        error => {
          console.log('error: %o', error);
        });
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
