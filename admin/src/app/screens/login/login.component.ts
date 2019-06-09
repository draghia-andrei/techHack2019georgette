import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String = '';
  password: String = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit = () => {
    event.preventDefault();
    if (this.username === 'admin') {
      this.router.navigate(['/evaluations'])
      console.log('Redirect to admin');
    }
    else {
      this.router.navigate(['/employee'])
      console.log('Redirect to G.');
    }
  }
}
