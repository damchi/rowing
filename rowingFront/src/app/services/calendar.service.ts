import { Injectable } from '@angular/core';
import {ServiceService} from './service.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, tap} from 'rxjs/operators';
import {TrainingPlanning} from '../domaines/training-planning';
import {Training} from '../domaines/training';

@Injectable({
  providedIn: 'root'
})
export class CalendarService extends ServiceService {

  constructor(private http: HttpClient) {
    super();
  }


  getAll(): Observable<TrainingPlanning[]> {
    return this.http.get<TrainingPlanning[]>(`${environment.apiUrl}/entrainementCalendar`)
      .pipe(
        tap(trainings => console.log('fetched trainnings')),
        catchError(this.handleError('getAll', []))
      );
  }

  save(training: TrainingPlanning): Observable<TrainingPlanning> {
    return this.http.post<TrainingPlanning>(`${environment.apiUrl}/entrainementCalendar/create`, training, this.getOptions()).pipe(
      tap((train: TrainingPlanning) => console.log(`added trainning w/ id=${train.id}`)),
      catchError(this.handleError<TrainingPlanning>('save'))
    );
  }

  // update(id: number, training: TrainingPlanning): Observable<TrainingPlanning> {
  //   return this.http.put(`${environment.apiUrl}/entrainementCalendar/${training.id}/update`, training, this.getOptions()).pipe(
  //     tap((train: TrainingPlanning) => console.log(`update trainning w/ id=${train.id}`)),
  //     catchError(this.handleError<TrainingPlanning>('update'))
  //   );
  // }

  delete(id: number, training: TrainingPlanning): Observable<Training> {
    return this.http.delete(`${environment.apiUrl}/entrainementCalendar/${training.id}/delete`, this.getOptions()).pipe(
      tap((train: Training) => console.log(`update trainning w/ id=${train.id}`)),
      catchError(this.handleError<Training>('delete'))
    );
  }
}
