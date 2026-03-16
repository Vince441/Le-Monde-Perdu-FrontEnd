import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DinoStat } from '../models/Dinosaures/dinoStat.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DinoStatService {
  private readonly API_URL = 'http://localhost:8080';
  private readonly URL_SERVICE = 'dino-stat';
  private readonly FINAL_API = `${this.API_URL}/${this.URL_SERVICE}`;

    constructor(private readonly http: HttpClient) { }

    getStatByIdDino(idDino : string): Observable<DinoStat>{
      return this.http.get<DinoStat>(`${this.FINAL_API}/${idDino}`);
    }
}
