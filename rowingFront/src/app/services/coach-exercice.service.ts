import { Injectable } from '@angular/core';
import {ServiceService} from './service.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, tap} from 'rxjs/operators';
import {Exercice} from '../domaines/exercice';

@Injectable({
  providedIn: 'root'
})
export class CoachExerciceService extends ServiceService {

  constructor(private http: HttpClient) {
    super();
  }

  getAll(): Observable<Exercice[]> {
    return this.http.get<Exercice[]>(`${environment.apiUrl}/exercices`)
      .pipe(
        tap(trainings => console.log('fetched exercice')),
        catchError(this.handleError('getAll', []))
      );
  }

  save(exercice: Exercice): Observable<Exercice> {
    return this.http.post<Exercice>(`${environment.apiUrl}/exercices/create`, exercice, this.getOptions()).pipe(
      tap((exe: Exercice) => console.log(`added trainning w/ id=${exe.id}`)),
      catchError(this.handleError<Exercice>('save'))
    );
  }


}
