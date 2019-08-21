import {Injectable, Input} from '@angular/core';
import {Entrainements} from '../domaines/entrainements';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {catchError, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ServiceService} from './service.service';


@Injectable({
  providedIn: 'root'
})

export class CoachEntrainementsService extends ServiceService {

  constructor(private http: HttpClient) {
    super();
  }


  getAll(): Observable<Entrainements[]> {
    return this.http.get<Entrainements[]>(`${environment.apiUrl}/entrainements`)
      .pipe(
        tap(trainings => console.log('fetched trainnings')),
        catchError(this.handleError('getAll', []))
      );
  }

  save(training: Entrainements): Observable<Entrainements> {
    return this.http.post<Entrainements>(`${environment.apiUrl}/entrainements/create`, training, this.getOptions()).pipe(
      tap((train: Entrainements) => console.log(`added trainning w/ id=${train.id}`)),
      catchError(this.handleError<Entrainements>('save'))
    );
  }

}
