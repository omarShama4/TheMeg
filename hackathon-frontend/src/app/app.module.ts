import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AddHackathonComponent } from './admin/add-hackathon/add-hackathon.component';
import { ViewHackathonsComponent } from './admin/view-hackathons/view-hackathons.component';
import { HackathonDetailsComponent } from './admin/hackathon-details/hackathon-details.component';
import { CompetitorSignupComponent } from './competitor/competitor-signup/competitor-signup.component';
import { CompetitorLoginComponent } from './competitor/competitor-login/competitor-login.component';
import { HackathonRegistrationComponent } from './competitor/hackathon-registration/hackathon-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AddHackathonComponent,
    ViewHackathonsComponent,
    HackathonDetailsComponent,
    CompetitorSignupComponent,
    CompetitorLoginComponent,
    HackathonRegistrationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
