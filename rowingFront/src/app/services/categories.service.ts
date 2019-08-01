import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${environment.apiUrl}/categories`);
  }
}
