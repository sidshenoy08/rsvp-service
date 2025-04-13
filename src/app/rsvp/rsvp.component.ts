import { Component, OnInit } from '@angular/core';
import { RSVPCounts, RsvpService, RSVPStatus } from '../services/rsvp.service';
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
  player = '';
  status: RSVPStatus = 'Maybe';
  responseCounts: RSVPCounts = this.rsvpService.getResponseCounts();
  confirmedPlayers: string[] = [];

  constructor(public rsvpService: RsvpService) { }

  ngOnInit() {
    this.update();
  }

  addOrUpdateStatus() {
    this.rsvpService.addOrUpdateStatus(this.player, this.status);
    this.update();
    this.player = '';
    this.status = 'Maybe';
  }

  update() {
    this.confirmedPlayers = this.rsvpService.getConfirmedPlayers();
    this.responseCounts = this.rsvpService.getResponseCounts();
  }

}
