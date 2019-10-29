import { Injectable } from '@angular/core';
import {ServiceService} from './service.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, map, tap} from 'rxjs/operators';
import {EntrainementsPlanning} from '../domaines/entrainements-planning';
import {Entrainements} from '../domaines/entrainements';

@Injectable({
  providedIn: 'root'
})
export class CalendarService extends ServiceService {

  constructor(private http: HttpClient) {
    super();
  }


  getAll(): Observable<EntrainementsPlanning[]> {
    return this.http.get<EntrainementsPlanning[]>(`${environment.apiUrl}/entrainementCalendar`)
      .pipe(
        tap(trainings => console.log('fetched trainnings')),
        catchError(this.handleError('getAll', []))
      );
  }

  save(training: EntrainementsPlanning): Observable<EntrainementsPlanning> {
    return this.http.post<EntrainementsPlanning>(`${environment.apiUrl}/entrainementCalendar/create`, training, this.getOptions()).pipe(
      tap((train: EntrainementsPlanning) => console.log(`added trainning w/ id=${train.id}`)),
      catchError(this.handleError<EntrainementsPlanning>('save'))
    );
  }

  update(id: number, training: EntrainementsPlanning): Observable<EntrainementsPlanning> {
    return this.http.put(`${environment.apiUrl}/entrainementCalendar/${training.id}/update`, training, this.getOptions()).pipe(
      tap((train: EntrainementsPlanning) => console.log(`update trainning w/ id=${train.id}`)),
      catchError(this.handleError<EntrainementsPlanning>('update'))
    );
  }
}
