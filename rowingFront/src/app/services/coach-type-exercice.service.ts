import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {ServiceService} from './service.service';
import {TypeExercice} from '../domaines/type-exercice';

@Injectable({
  providedIn: 'root'
})
export class CoachTypeExerciceService extends ServiceService {

  constructor(private http: HttpClient) {
    super();
  }

  getAll(): Observable<TypeExercice[]> {
    return this.http.get<TypeExercice[]>(`${environment.apiUrl}/type-exercices`)
      .pipe(
        tap(trainings => console.log('fetched type-exercices')),
        catchError(this.handleError('getAll', []))
      );
  }

  save(typeExercice: TypeExercice): Observable<TypeExercice> {
    return this.http.post<TypeExercice>(`${environment.apiUrl}/type-exercices/create`, typeExercice, this.getOptions()).pipe(
      tap((exe: TypeExercice) => console.log(`added trainning w/ id=${exe.id}`)),
      catchError(this.handleError<TypeExercice>('save'))
    );
  }
  update(id: number, typeExercice: TypeExercice): Observable<TypeExercice> {
    return this.http.put(`${environment.apiUrl}/type-exercices/${typeExercice.id}/update`, typeExercice, this.getOptions()).pipe(
      tap((typeExercices: TypeExercice) => console.log(`update typeExercices w/ id=${typeExercices.id}`)),
      catchError(this.handleError<TypeExercice>('update'))
    );
  }
}
