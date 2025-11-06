import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { UserDto } from '../models/utilisateur.model';
import { TokenDto } from '../models/token.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private API_URL = 'http://localhost:8080';
  private URL_SERVICE = 'auth/login';
  private FINAL_API = `${this.API_URL}/${this.URL_SERVICE}`;

  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor(private readonly http: HttpClient) {

    const storedIdUser = localStorage.getItem('idUser');
    this.userSubject = new BehaviorSubject<string | null>(
      storedIdUser ? storedIdUser : null
    );
    this.user$ = this.userSubject.asObservable();
  }

  login(credentials: { user: UserDto }) {
    return this.http.post<TokenDto>(`${this.FINAL_API}`, credentials)
      .pipe(
        tap(res => {
          localStorage.setItem('token', res.token);

          if (res.userDto?.idUser) {
            localStorage.setItem('idUser', res.userDto.idUser);
            this.userSubject.next(res.userDto.idUser);
          }
        })
      );
  }


  logout() {
    localStorage.removeItem('token');
    this.userSubject.next(null);
  }


  isLoggedIn(): boolean {
    return this.userSubject.value !== null;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }


}
