import {EventEmitter, Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() {}


  onGood = new EventEmitter();
  onError = new EventEmitter();

  good(message: string) {
    this.onGood.emit(message);
  }
  error(message: string) {
    this.onError.emit(message);
  }

   handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }


  public getOptions() {
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return {headers: headers};
  }
}
