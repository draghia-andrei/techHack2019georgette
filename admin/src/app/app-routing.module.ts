import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { EmployeeComponent } from './screens/employee/employee.component';
import { AdministratorComponent } from './screens/administrator/administrator.component';
import { RulesComponent } from './screens/rules/rules.component';
import { EmployeesComponent } from './screens/employees/employees.component';
import { EvaluationsComponent } from './screens/evaluations/evaluations.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'employee',
    component: EmployeeComponent
  },
  {
    path: 'administrator',
    component: AdministratorComponent
  },
  {
    path: 'rules',
    component: RulesComponent
  },
  {
    path: 'employees',
    component: EmployeesComponent
  },
  {
    path: 'evaluations',
    component: EvaluationsComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
