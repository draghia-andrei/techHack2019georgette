import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public emailValue = '';
  public passwordValue = '';

  constructor(private authService: AuthService) { }

  // submitLogin() {
  //   this.authService.login(this.emailValue, this.passwordValue);
  // }

  public onSubmit(loginForm: NgForm) {
    // console.log(loginForm.value);  // { first: '', last: '' }
    // console.log(loginForm.valid);  // false

      this.authService.login(loginForm.value);
  }
}
