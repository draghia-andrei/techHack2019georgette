import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

const employees = [
  {
    id: 1,
    firstName: 'a',
    lastName: 'b',
    username: 'c',
    isActive: true,
    isAdmin: false
  },
  {
    id: 2,
    firstName: 'b',
    lastName: 'b',
    username: 'c',
    isActive: true,
    isAdmin: false
  }
]


@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  employees: Employee[] = employees;

  constructor() { }

  getAll() {
    return this.employees;
  }
}
