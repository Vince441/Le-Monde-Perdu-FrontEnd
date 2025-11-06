import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDto } from '../models/utilisateur.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
private API_URL = 'http://localhost:8080';
private URL_SERVICE = 'utilisateur';
private FINAL_API = `${this.API_URL}/${this.URL_SERVICE}`;

constructor(private http: HttpClient){}




postUser(userDto:UserDto): Observable<UserDto>{
  return this.http.post<UserDto>(this.FINAL_API, userDto);
}

patchUser(id: string, update: Partial<UserDto>): Observable<UserDto> {
  return this.http.patch<UserDto>(`${this.FINAL_API}/${id}/update`, update);
}


}
