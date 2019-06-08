import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://www.something.com';

  constructor(private http: HttpClient) { }

  public login(email, password) {
    console.log('in api call');
    return this.http.post('/login', {email, password});
  }
}
