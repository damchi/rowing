import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }


  onGood = new EventEmitter();
  onError = new EventEmitter();

  good(message: string) {
    this.onGood.emit(message);
  }
  error(message: string) {
    this.onError.emit(message);
  }
}
