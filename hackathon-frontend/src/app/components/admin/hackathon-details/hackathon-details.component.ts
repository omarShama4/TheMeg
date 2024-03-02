// src/app/hackathon-details/hackathon-details.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { Hackathon } from 'src/app/models/hackathon.model';
import { HackathonService } from 'src/app/services/hackathon.service';

@Component({
  selector: 'app-hackathon-details',
  templateUrl: './hackathon-details.component.html',
  styleUrls: ['./hackathon-details.component.css']
})
export class HackathonDetailsComponent implements OnInit {

  @Input() id!: number;
  hackathon!: Hackathon;

  constructor(private hackathonService: HackathonService) { }

  ngOnInit(): void {
    if (this.id) {
      this.loadHackathon(this.id);
    }
  }

  loadHackathon(id: number): void {
    this.hackathonService.getHackathonById(id).subscribe(
      (hackathon: Hackathon) => {
        this.hackathon = hackathon;
      },
      (error: any) => {
        console.error('Error loading hackathon details:', error);
      }
    );
  }
}
