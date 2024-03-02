// src/app/services/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // Assuming backend server is running locally

  constructor(private http: HttpClient) { }

  private readonly credentials = [
    { username: 'user1', password: 'password1', role: 'competitor' },
    { username: 'user2', password: 'password2', role: 'admin' }
  ];
  signup(username: string, email:string, password: string, role: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/sign-up`, { username, email, password, role });
  }
  login(username: string, password: string): Observable<any> {
    
    // Check if the provided username and password match any of the stored credentials
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password });
  }

  logout(): void {
    // Remove user information from session storage
    sessionStorage.removeItem('currentUser');
  }

  getCurrentUser(): any {
    // Retrieve user information from session storage
    const user = sessionStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }

  isAuthenticated(): boolean {
    // Check if a user is authenticated (i.e., logged in)
    return !!this.getCurrentUser();
  }

  isAdmin(): boolean {
    // Check if the current user has the admin role
    const user = this.getCurrentUser();
    return user && user.role === 'admin';
  }
}


