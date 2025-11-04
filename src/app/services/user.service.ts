import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/utilisateur.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
private API_URL = 'http://localhost:8080';
private URL_SERVICE = 'utilisateur';
private FINAL_API = `${this.API_URL}/${this.URL_SERVICE}`;

constructor(private http: HttpClient){}

postUser(user:User): Observable<User>{
  return this.http.post<User>(this.FINAL_API, user);
}


}
