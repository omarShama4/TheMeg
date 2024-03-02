import { Component, Input } from '@angular/core';
import { HackathonService } from 'src/app/services/hackathon.service';

@Component({
  selector: 'app-hackathon-registration',
  templateUrl: './hackathon-registration.component.html',
  styleUrls: ['./hackathon-registration.component.css'],
})
export class HackathonRegistrationComponent {
  @Input() hackathonId: string = 'AI-experienced-2024';
  teamName: string = '';
  challenges: string = '';
  teamMembers: any[] = [
    { title: '', name: '', id: '', email: '', mobile: '' },
    { title: '', name: '', id: '', email: '', mobile: '' },
  ]; // Initialize with two empty members

  constructor(private hackathonService: HackathonService) {}

  register(): void {
    // Prepare registration data
    const registrationData = {
      teamName: this.teamName,
      challenges: this.challenges,
      teamMembers: this.teamMembers,
    };
    console.log(registrationData);
    // Call HackathonService to register the team
    this.hackathonService.registerTeam(registrationData).subscribe(
      (response) => {
        console.log('Team registered successfully:', response);
        // Reset form after successful registration
        this.resetForm();
      },
      (error) => {
        console.error('Error registering team:', error);
      }
    );
  }

  resetForm(): void {
    this.teamName = '';
    this.challenges = '';
    this.teamMembers = [
      { title: '', name: '', id: '', email: '', mobile: '' },
      { title: '', name: '', id: '', email: '', mobile: '' },
    ];
  }
}
