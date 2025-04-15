# RsvpService

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.16.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## End of Angular template ##
The rsvp service can perform the following functions.
  1. Add a new player's RSVP or update an existing player's RSVP.
  2. Fetch the list of players who have confirmed their participation.
  3. Fetch the total RSVP counts, accepted counts, and declined counts.

In the backend, the service stores the RSVP counts and the list of unique players. No persistent storage system has been integrated yet.
The frontend is also minimal with no styling as the focus was on the backend functionality.
