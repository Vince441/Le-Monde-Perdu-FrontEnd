import { Injectable } from '@angular/core';
import { Dinosaures } from '../models/Dinosaures/dinosaures.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DinoService {
  private readonly API_URL = 'http://localhost:8080';
  private readonly URL_SERVICE = 'dinosaures';
  private readonly FINAL_API = `${this.API_URL}/${this.URL_SERVICE}`;

  constructor(private readonly http: HttpClient) { }

getDino(id: string) {
  return this.http.get<Dinosaures>(`${this.FINAL_API}/${id}`);
}


}
