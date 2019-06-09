import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Employee {
  firstName: string;
  lastName: string;
  userName: string;
  isActive: boolean;
  isAdmin: boolean;
}

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})

export class EmployeesComponent implements OnInit {
  title = 'Employees'
  displayedColumns: string[] = ['index', 'firstName', 'lastName', 'username', 'isActive', 'isAdmin'];
  dataSource: any;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private employeeService: EmployeeService) {
  }

  public ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.employeeService.getAll());
    this.dataSource.sort = this.sort;
  }
}
