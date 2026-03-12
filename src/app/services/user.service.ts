import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDto } from '../models/utilisateur.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private readonly API_URL = 'http://localhost:8080';
  private readonly URL_SERVICE = 'utilisateur';
  private readonly FINAL_API = `${this.API_URL}/${this.URL_SERVICE}`;

  constructor(private http: HttpClient) { }




  postUser(userDto: UserDto): Observable<UserDto> {
    return this.http.post<UserDto>(this.FINAL_API, userDto);
  }

  patchUserCreer(id: string, update: Partial<UserDto>): Observable<UserDto> {
    return this.http.patch<UserDto>(`${this.FINAL_API}/${id}/cree-compte`, update);
  }

  getUser(id:string): Observable<UserDto>{
    return this.http.get<UserDto>(`${this.FINAL_API}/${id}`);
  }

  patchUser(id: string, update: Partial<UserDto>): Observable<UserDto>{
    return this.http.patch<UserDto>(`${this.FINAL_API}/${id}/updateUtilisateur`, update)
  }
  

}
