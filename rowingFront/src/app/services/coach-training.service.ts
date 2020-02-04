import {Injectable} from '@angular/core';
import {Training} from '../domaines/training';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {catchError, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ServiceService} from './service.service';


@Injectable({
  providedIn: 'root'
})

export class CoachTrainingService extends ServiceService {

  constructor(private http: HttpClient) {
    super();
  }


  getAll(): Observable<Training[]> {
    return this.http.get<Training[]>(`${environment.apiUrl}/entrainements`)
      .pipe(
        tap(trainings => console.log('fetched trainnings')),
        catchError(this.handleError('getAll', []))
      );
  }

  save(training: Training): Observable<Training> {
    return this.http.post<Training>(`${environment.apiUrl}/entrainements/create`, training, this.getOptions()).pipe(
      tap((train: Training) => console.log(`added trainning w/ id=${train.id}`)),
      catchError(this.handleError<Training>('save'))
    );
  }


  delete(id: number, training: Training): Observable<Training> {
    return this.http.delete(`${environment.apiUrl}/entrainements/${training.id}/delete`, this.getOptions()).pipe(
      tap((train: Training) => console.log(`update trainning w/ id=${train.id}`)),
      catchError(this.handleError<Training>('delete'))
    );
  }


  update(id: number, training: Training): Observable<Training> {
    return this.http.put(`${environment.apiUrl}/entrainements/${training.id}/update`, training, this.getOptions()).pipe(
      tap((train: Training) => console.log(`update trainning w/ id=${train.id}`)),
      catchError(this.handleError<Training>('update'))
    );
  }

}
