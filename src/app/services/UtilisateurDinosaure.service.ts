import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilisateurDinosaure } from '../models/Dinosaures/utilisateur-dinosaures.models';

@Injectable({
  providedIn: 'root',
})
export class UtilisateurDinosaureService {
  private readonly API_URL = 'http://localhost:8080';
  private readonly URL_SERVICE = 'utilisateur-dinosaures';
  private readonly FINAL_API = `${this.API_URL}/${this.URL_SERVICE}`;


  constructor(private readonly http: HttpClient) { }

  getUserDinos(userId: string): Observable<UtilisateurDinosaure[]> {
    return this.http.get<UtilisateurDinosaure[]>(
      `http://localhost:8080/utilisateur-dinosaures/utilisateur/${userId}`
    );
  }

  postUtilsateurDinosaureByCode(code: string, idUser: string) {
    return this.http.post<UtilisateurDinosaure>(
      `${this.FINAL_API}?code=${code}&idUser=${idUser}`,
      {}
    );
  }

}
