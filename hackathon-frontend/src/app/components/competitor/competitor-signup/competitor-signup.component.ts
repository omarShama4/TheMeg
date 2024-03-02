
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-competitor-signup',
  templateUrl: './competitor-signup.component.html',
  styleUrls: ['./competitor-signup.component.css']
})
export class CompetitorSignupComponent {

  constructor(private authService: AuthService, private router: Router) { }

  signup(username: string, email: string, password: string): void {
    const hashedPassword = CryptoJS.SHA256(password).toString();
    this.authService.signup(username, email, hashedPassword, 'competitor').subscribe(
      () => {
        // Redirect to login page after successful signup
        this.router.navigate(['/login']);
      },
      (error: any) => {
        console.error('Error during signup:', error);
        // Handle error (e.g., display error message)
      }
    );
  }
}

