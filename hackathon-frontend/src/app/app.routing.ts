import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { CompetitorSignupComponent } from './components/competitor/competitor-signup/competitor-signup.component';
import { LoginComponent } from './components/shared/login/login.component';
import { ViewHackathonsComponent } from './components/admin/view-hackathons/view-hackathons.component';
import { AddHackathonComponent } from './components/admin/add-hackathon/add-hackathon.component';
import { HackathonDetailsComponent } from './components/admin/hackathon-details/hackathon-details.component';
import { HackathonRegistrationComponent } from './components/competitor/hackathon-registration/hackathon-registration.component';

const routes: Routes = [
  {
    path: '',
    component: HomeScreenComponent,
  },
  {
    path: 'sign-up',
    component: CompetitorSignupComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'hackathons',
    component: ViewHackathonsComponent,
  },
  {
    path: 'add-hackathon',
    component: AddHackathonComponent,
  },
  {
    path: 'hackathon-details',
    component: HackathonDetailsComponent,
  },
  {
    path: 'hackathon-registration',
    component: HackathonRegistrationComponent,
  },
  { path: '**', component: HomeScreenComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting {}
