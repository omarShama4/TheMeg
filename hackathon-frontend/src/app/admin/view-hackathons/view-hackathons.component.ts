import { Component, OnInit } from '@angular/core';
import { Hackathon } from 'src/app/models/hackathon.model';
import { HackathonService } from 'src/app/services/hackathon.service';

@Component({
  selector: 'app-view-hackathons',
  templateUrl: './view-hackathons.component.html',
  styleUrls: ['./view-hackathons.component.css']
})
export class ViewHackathonsComponent implements OnInit {
  hackathons: Hackathon[] = [];

  constructor(private hackathonService: HackathonService) { }

  ngOnInit(): void {
    this.loadHackathons();
  }

  loadHackathons(): void {
    this.hackathonService.getHackathons().subscribe(
      (hackathons: Hackathon[]) => {
        this.hackathons = hackathons;
      },
      (error: any) => {
        console.error('Error loading hackathons:', error);
      }
    );
  }

  registerForHackathon(hackathon: Hackathon): void {
    // Implement registration logic here
    console.log('Registering for hackathon:', hackathon);
  }
}