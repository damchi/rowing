import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServiceService} from './service.service';
import {Observable} from 'rxjs';
import {TypeExercice} from '../domaines/type-exercice';
import {environment} from '../../environments/environment';
import {catchError, tap} from 'rxjs/operators';
import {Categories} from '../domaines/categories';

@Injectable({
  providedIn: 'root'
})
export class CoachEntrainementsCategoriesService extends ServiceService{

  constructor(private http: HttpClient) {
    super();
  }


  getAll(): Observable<Categories[]> {
    return this.http.get<Categories[]>(`${environment.apiUrl}/categories`)
      .pipe(
        tap(trainings => console.log('fetched categories')),
        catchError(this.handleError('getAll', []))
      );
  }

  save(categorie: Categories): Observable<Categories> {
    return this.http.post<Categories>(`${environment.apiUrl}/categories/create`, categorie, this.getOptions()).pipe(
      tap((exe: Categories) => console.log(`added trainning w/ id=${exe.id}`)),
      catchError(this.handleError<Categories>('save'))
    );
  }
  update(id: number, categorie: Categories): Observable<Categories> {
    return this.http.put(`${environment.apiUrl}/categories/${categorie.id}/update`, categorie, this.getOptions()).pipe(
      tap((categories: Categories) => console.log(`update categories w/ id=${categories.id}`)),
      catchError(this.handleError<Categories>('update'))
    );
  }
}






