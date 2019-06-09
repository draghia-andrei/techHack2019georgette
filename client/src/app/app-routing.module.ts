import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { AuthGuard } from './auth.guard';
import {TranzactionRatingComponent} from './tranzaction-rating/tranzaction-rating.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'transaction-rating',
    component: TranzactionRatingComponent,
    data: { title: 'Transaction Rating' }
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: TransactionListComponent,
    data: { title: 'Transaction List' }
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
