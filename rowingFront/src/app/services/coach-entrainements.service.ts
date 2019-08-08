import { Injectable } from '@angular/core';
import {Entrainements} from '../domaines/entrainements';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CoachEntrainementsService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${environment.apiUrl}/entrainements`);
  }

  save(training: Entrainements) {
    return this.http.post(`${environment.apiUrl}/entrainements/create`, 'json=' +  encodeURIComponent(JSON.stringify(training)));
  }

}
