import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://www.something.com';

  constructor(private http: HttpClient) { }

  public login(formData) {
    return this.http.post('/login', formData);
  }

  public getTransactions() {
    return this.http.get('/transactions');
  }

  public rateTransaction(formData) {
    return this.http.post('/rateTransaction', formData);
  }
}
