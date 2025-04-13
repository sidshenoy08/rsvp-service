import { Component } from '@angular/core';
import { Player, RSVPCounts, RsvpService, RSVPStatus } from '../services/rsvp.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-rsvp',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.css'
})
export class RsvpComponent {
  name = '';
  email = '';
  status: RSVPStatus = 'Maybe';
  responseCounts: RSVPCounts = this.rsvpService.getResponseCounts();
  confirmedPlayers: string[] = [];

  constructor(private rsvpService: RsvpService) { }

  ngOnInit() {
    this.fetchData();
  }

  // called when the user clicks to RSVP
  addOrUpdateStatus() {
    this.rsvpService.addOrUpdateStatus(this.name, this.email, this.status);
    this.fetchData();
    this.name = '';
    this.email = '';
    this.status = 'Maybe';
  }

  // re-calculate confirmed players and response breakdown after an RSVP
  fetchData() {
    this.confirmedPlayers = this.rsvpService.getConfirmedPlayers();
    this.responseCounts = this.rsvpService.getResponseCounts();
  }

}
