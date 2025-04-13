import { bootstrapApplication } from '@angular/platform-browser';
import { RsvpComponent } from './app/rsvp/rsvp.component';

bootstrapApplication(RsvpComponent)
  .catch((err) => console.error(err));
