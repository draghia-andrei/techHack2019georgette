import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  title = "Employee";
  id: string;
  score: number = 55;
  isShown = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit = event => {
    this.isShown = true;
  }
}
