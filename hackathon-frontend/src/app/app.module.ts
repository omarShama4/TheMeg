import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Import RouterModule

import { AppComponent } from './app.component';
import { AddHackathonComponent } from './components/admin/add-hackathon/add-hackathon.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { HackathonDetailsComponent } from './components/admin/hackathon-details/hackathon-details.component';
import { ViewHackathonsComponent } from './components/admin/view-hackathons/view-hackathons.component';
import { CompetitorLoginComponent } from './components/competitor/competitor-login/competitor-login.component';
import { CompetitorSignupComponent } from './components/competitor/competitor-signup/competitor-signup.component';
import { HackathonRegistrationComponent } from './components/competitor/hackathon-registration/hackathon-registration.component';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { LoginComponent } from './components/shared/login/login.component';
import { AppRouting } from './app.routing';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AddHackathonComponent,
    ViewHackathonsComponent,
    HackathonDetailsComponent,
    CompetitorSignupComponent,
    CompetitorLoginComponent,
    HackathonRegistrationComponent,
    HomeScreenComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouting,
    RouterModule // Import RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
