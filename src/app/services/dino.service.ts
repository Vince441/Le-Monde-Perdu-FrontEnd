import { Injectable } from '@angular/core';
import { Dinosaures, UtilisateurDinosaure } from '../models/Dinosaures/dinosaures.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DinoService {
  private API_URL = 'http://localhost:8080';
  private URL_SERVICE = 'dinosaures';
  private FINAL_API = `${this.API_URL}/${this.URL_SERVICE}`;

  constructor(private http: HttpClient) { }

getDino(id: string) {
  return this.http.get<Dinosaures>(`http://localhost:8080/dinosaures/${id}`);
}

getUserDinos(userId: string): Observable<UtilisateurDinosaure[]> {
  return this.http.get<UtilisateurDinosaure[]>(
    `http://localhost:8080/utilisateur-dinosaures/utilisateur/${userId}`
  );
}
}
