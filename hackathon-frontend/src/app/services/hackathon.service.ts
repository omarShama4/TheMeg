import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hackathon } from '../models/hackathon.model';

@Injectable({
  providedIn: 'root'
})
export class HackathonService {
  private apiUrl = 'http://localhost:3000/hackathons'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  getHackathons(): Observable<Hackathon[]> {
    return this.http.get<Hackathon[]>(this.apiUrl);
  }
}