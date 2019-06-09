import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private apiService: ApiService) {}

  isLoggedIn = true;

  checkAuth() {
    return this.isLoggedIn;
  }

  login(formData) {
    this.apiService.login(formData)
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
