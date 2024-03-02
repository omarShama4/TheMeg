import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  login(): void {
    console.log('login');
    const hashedPassword = CryptoJS.SHA256(this.password).toString();
    // Call AuthService to perform login
    this.authService.login(this.username, hashedPassword).subscribe((res) => {
      console.log(res);
      //TODO handle error message and sucess
    });
  }
  logout() {
    this.authService.logout();
  }
}

