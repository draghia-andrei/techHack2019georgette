import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})

export class EmployeesComponent implements OnInit {
  public employees: Employee[];

  constructor(private employeeService: EmployeeService) {
  }

  public ngOnInit(): void {
    this.employees = this.employeeService.getAll();
  }
}
