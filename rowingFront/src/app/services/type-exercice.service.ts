import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServiceService} from './service.service';
import {Observable} from 'rxjs';
import {Exercice} from '../domaines/exercice';
import {environment} from '../../environments/environment';
import {catchError, tap} from 'rxjs/operators';
import {TypeExercice} from '../domaines/type-exercice';

@Injectable({
  providedIn: 'root'
})
export class TypeExerciceService extends ServiceService {


  constructor(private http: HttpClient) {
    super();
  }

  getAll(): Observable<TypeExercice[]> {
    return this.http.get<TypeExercice[]>(`${environment.apiUrl}/type-exercices`)
      .pipe(
        tap(trainings => console.log('fetched type exercice')),
        catchError(this.handleError('getAll', []))
      );
  }

}
