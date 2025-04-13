import { Injectable } from '@angular/core';

// RSVP responses can only be one of the following
export type RSVPStatus = "Yes" | "No" | "Maybe";

export interface Player {
  name: string,
  email?: string
}

export interface RSVPEntry {
  player: Player,
  rsvpStatus: RSVPStatus
}

export interface RSVPCounts {
  total: number,
  confirmed: number,
  declined: number
}

@Injectable({
  providedIn: 'root'
})
export class RsvpService {
  private readonly STATUS: RSVPStatus[] = ["Yes", "No", "Maybe"];
  private responses = new Map<string, RSVPStatus>();
  private player: Player = {name: ''};

  constructor() { }

  addOrUpdateStatus(name: string, email: string, rsvpStatus: RSVPStatus): void {
    // check whether the input RSVP status is valid
    if (!this.STATUS.includes(rsvpStatus)) {
      throw new Error(`Invalid RSVP status: ${rsvpStatus}`);
    } else if (!name) { // prompt the user to enter a name if blank
      alert("Please enter the player's name!");
    } else {
      this.responses.set(name, rsvpStatus);
      console.log("Player RSVP recorded!");
      this.player.name = name;

      // if email is not blank and passes the validation check, set the player's email otherwise leave blank
      if(email && email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
        this.player.email = email;
      
      console.log(this.player);
    }
  }

  getConfirmedPlayers(): string[] {
    const confirmedPlayerList = Array.from(this.responses.entries())
      .filter(([, rsvpStatus]) => rsvpStatus === 'Yes')
      .map(([player]) => player)

    return confirmedPlayerList;
  }

  getResponseCounts(): RSVPCounts {
    let confirmed = 0;
    let declined = 0;

    let responseCounts: RSVPCounts = {
      total: 0,
      confirmed: 0,
      declined: 0
    };

    for (let status of this.responses.values()) {
      if (status === "Yes")
        confirmed++;
      else if (status === "No")
        declined++;
    }

    responseCounts.total = this.responses.size;
    responseCounts.confirmed = confirmed;
    responseCounts.declined = declined;

    console.log(responseCounts);
    return responseCounts;
  }
}
