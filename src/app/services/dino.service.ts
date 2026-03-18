import { Injectable } from '@angular/core';
import { Dinosaures, PostDinosauresAdmin } from '../models/Dinosaures/dinosaures.model';
import { HttpClient } from '@angular/common/http';
import { Types } from '../models/Dinosaures/types.model';
import { Periodes } from '../models/Dinosaures/periodes.model';
import { Observable } from 'rxjs';

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

getType(): Observable<Types[]>{
  return this.http.get<Types[]>(`${this.FINAL_API}/type-dinosaure`);
}

getPeriode(): Observable<Periodes[]>{
  return this.http.get<Periodes[]>(`${this.FINAL_API}/periode-dinosaure`);
}

postDino(dino:PostDinosauresAdmin): Observable<PostDinosauresAdmin>{
  return this.http.post<PostDinosauresAdmin>(`${this.FINAL_API}`, dino)
}


}
