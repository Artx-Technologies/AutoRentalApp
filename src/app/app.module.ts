import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RenterDashboardComponent } from './renter-dashboard/renter-dashboard.component';
import { LesseeDashboardComponent } from './lessee-dashboard/lessee-dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ManageAutosComponent } from './manage-autos/manage-autos.component';
import { EarningsComponent } from './earnings/earnings.component';
import { RecentOrdersComponent } from './recent-orders/recent-orders.component';
import { AddNewAutoComponent } from './add-new-auto/add-new-auto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    LoginComponent,
    RegisterComponent,
    RenterDashboardComponent,
    LesseeDashboardComponent,
    AccountSettingsComponent,
    ForgotPasswordComponent,
    ManageAutosComponent,
    EarningsComponent,
    RecentOrdersComponent,
    AddNewAutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
