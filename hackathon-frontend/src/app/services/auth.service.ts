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

  signup(username: string, email:string, password: string, role: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/sign-up`, { username, email, password, role });
  }
}
