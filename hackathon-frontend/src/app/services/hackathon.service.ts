import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hackathon } from '../models/hackathon.model';

@Injectable({
  providedIn: 'root'
})
export class HackathonService {
  private hackathons: Hackathon[] = [
    {
      id: 1,
      name: 'Hackathon 1',
      theme: 'Web Development',
      registrationDateRange: '01/01/2024 - 01/15/2024',
      eventDate: '02/01/2024',
      challenges: ['Frontend Development', 'Backend Development', 'UI/UX Design'],
      maxTeamSize: 4,
      maxTeams: 10
    },
    {
      id: 2,
      name: 'Hackathon 2',
      theme: 'Data Science',
      registrationDateRange: '02/01/2024 - 02/15/2024',
      eventDate: '03/01/2024',
      challenges: ['Data Analysis', 'Machine Learning', 'Data Visualization'],
      maxTeamSize: 3,
      maxTeams: 8
    }
  ];

  constructor() { }

  getHackathons(): Observable<Hackathon[]> {
    // Simulate asynchronous data fetching
    return of(this.hackathons);
  }

  getHackathonById(id: number): Observable<Hackathon | undefined> {
    // Simulate asynchronous data fetching by ID
    const hackathon = this.hackathons.find(h => h.id === id);
    return of(hackathon);
  }
}