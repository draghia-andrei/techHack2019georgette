import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

const employees = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    username: 'joDoe01',
    isActive: true,
    isAdmin: false
  },
  {
    id: 2,
    firstName: 'George',
    lastName: 'B.',
    username: 'georgB',
    isActive: true,
    isAdmin: true
  },
  {
    id: 3,
    firstName: 'Cardi',
    lastName: 'B.',
    username: 'cbardi',
    isActive: false,
    isAdmin: true
  }
]


@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  employees: Employee[] = employees;

  set(employees: Employee[]): void {
    this.employees = employees;
  }

  getAll() {
    return this.employees;
  }
}
