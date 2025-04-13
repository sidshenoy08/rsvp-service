import { Injectable } from '@angular/core';

export type RSVPStatus = "Yes" | "No" | "Maybe";

// export interface Player {
//   id: number,
//   name: string,
//   email?: string
// }

export interface RSVPEntry {
  player: string,
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

  constructor() { }

  addOrUpdateStatus(player: string, rsvpStatus: RSVPStatus): void {
    if (!this.STATUS.includes(rsvpStatus)) {
      throw new Error(`Invalid RSVP status: ${rsvpStatus}`);
    } else {
      this.responses.set(player, rsvpStatus);
      console.log("Player RSVP recorded!");
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
