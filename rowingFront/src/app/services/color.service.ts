import { Injectable } from '@angular/core';
import {ServiceService} from './service.service';
import {HttpClient} from '@angular/common/http';
import {Training} from '../domaines/training';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, tap} from 'rxjs/operators';
import {Color} from '../domaines/color';

@Injectable({
  providedIn: 'root'
})
export class ColorService extends ServiceService {

  constructor(private http: HttpClient) {
    super();
  }

  getAll() {
    return this.http.get(`${environment.apiUrl}/color`);
  }
}
