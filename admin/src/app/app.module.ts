import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './screens/login/login.component';
import { EmployeeComponent } from './screens/employee/employee.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdministratorComponent } from './screens/administrator/administrator.component';
import { EvaluationsComponent } from './screens/evaluations/evaluations.component';
import { RulesComponent } from './screens/rules/rules.component';
import { EmployeesComponent } from './screens/employees/employees.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    AdministratorComponent,
    NavbarComponent,
    EvaluationsComponent,
    RulesComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
