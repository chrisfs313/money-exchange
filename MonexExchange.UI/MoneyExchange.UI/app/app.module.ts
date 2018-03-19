import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoneyBackendService } from './services/money-backend.services';
import { AuthBackendService } from './services/auth-backend.services';
import { AuthGuardService } from './services/auth-guard.services';
import { LoaderService } from './services/loader.services';
import { UserClaimService } from './services/user-claim.services';

@NgModule({
    declarations: [
        AppComponent,
        routingComponents
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        MoneyBackendService,
        AuthBackendService,
        AuthGuardService,
        UserClaimService,
        LoaderService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
