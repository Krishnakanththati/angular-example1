import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() { }
  log() {
    console.log('This is from Random Service...')
  }
}
