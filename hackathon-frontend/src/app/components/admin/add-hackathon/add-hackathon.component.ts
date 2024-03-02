import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Hackathon } from 'src/app/models/hackathon.model';
import { HackathonService } from 'src/app/services/hackathon.service';

@Component({
  selector: 'app-add-hackathon',
  templateUrl: './add-hackathon.component.html',
  styleUrls: ['./add-hackathon.component.css']
})
export class AddHackathonComponent {
  hackathon: Hackathon = {
    id: 0,
    name: '',
    theme: '',
    registration_date_range: '',
    event_date: '',
    challenges: [],
    max_team_size: 0,
    max_teams: 0
  };

  hackathonForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    theme: new FormControl(null, [Validators.required, Validators.email , ]),
    registration_date_range: new FormControl(null, [Validators.required]),
    event_date: new FormControl(null, [Validators.required]),
    challenges: new FormControl(null, [Validators.required]),
    max_team_size: new FormControl(null, [Validators.required]),
    max_teams: new FormControl(null, [Validators.required]),
  });

  hackathonModel: Hackathon = new Hackathon();

  constructor(private hackathonService: HackathonService) { }

  onSubmit(): void {
    this.hackathonModel.name = this.hackathonForm.value.name??'';
    this.hackathonModel.theme = this.hackathonForm.value.theme??'';
    this.hackathonModel.registration_date_range = this.hackathonForm.value.registration_date_range??'';
    this.hackathonModel.event_date = this.hackathonForm.value.event_date??'';
    this.hackathonModel.challenges = this.hackathonForm.value.challenges??[];
    this.hackathonModel.max_team_size = this.hackathonForm.value.max_team_size??0;
    this.hackathonModel.max_teams = this.hackathonForm.value.max_teams??0;
    this.hackathonService.addHackathon(this.hackathonModel).subscribe(() => {
      console.log('Hackathon added successfully');
      this.hackathonForm.reset();
    }, (error) => {
      console.error('Error adding hackathon:', error);
    });
  }
}
