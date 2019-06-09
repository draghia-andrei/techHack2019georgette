import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { ApiService } from './api.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

import { InputComponent } from '../components/input/input.component';
import { ButtonComponent } from '../components/button/button.component';

import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { MessagingService } from './shared/messaging.service';
import { environment } from '../environments/environment';
import { AsyncPipe} from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranzactionRatingComponent } from './tranzaction-rating/tranzaction-rating.component';
import { TransactionItemComponent } from './transaction-item/transaction-item.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    InputComponent,
    ButtonComponent,
    TranzactionRatingComponent,
    TransactionItemComponent,
    TransactionListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthGuard, ApiService, MessagingService, AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
