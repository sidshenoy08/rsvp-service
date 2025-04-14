import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(level: string, msg: string) {
    console.log(`${level.toUpperCase()}: ${msg}`);
  }
}
