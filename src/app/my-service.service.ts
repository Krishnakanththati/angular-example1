import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  
  constructor() { }

  log() {
    console.log('This is from MyService...')
  }

}
