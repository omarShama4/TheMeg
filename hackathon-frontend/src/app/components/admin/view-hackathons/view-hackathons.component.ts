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
  selectedHackathonId!: number;
  selected: boolean = false

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

  selectHackathon(id: number): void {
    this.selectedHackathonId = id;
    this.selected = true
    console.log(this.selected)
  }
}
