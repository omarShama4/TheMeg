import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hackathon } from '../models/hackathon.model';

@Injectable({
  providedIn: 'root'
})
export class HackathonService {
  private apiUrl = 'http://localhost:3000/hackathons';

  constructor(private http: HttpClient) { }

  getHackathons(): Observable<Hackathon[]> {
    return this.http.get<Hackathon[]>(this.apiUrl);
  }

  addHackathon(hackathon: Hackathon): Observable<any> {
    return this.http.post(this.apiUrl, hackathon);
  }

  getHackathonById(id: number): Observable<Hackathon> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Hackathon>(url);
  }
  registerTeam(registrationData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/hackathons/register`, registrationData);
  }
}
