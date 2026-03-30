import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { UserDto } from '../models/utilisateur.model';
import { TokenDto } from '../models/token.model';
import { LocalStorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private readonly API_URL = 'http://localhost:8080';
  private readonly URL_SERVICE = 'auth/login';
  private readonly FINAL_API = `${this.API_URL}/${this.URL_SERVICE}`;

  private readonly userSubject = new BehaviorSubject<UserDto | null>(null);
  user$ = this.userSubject.asObservable();

  constructor(private readonly http: HttpClient, private readonly localStorageService: LocalStorageService) {
    // Restaurer l'utilisateur depuis localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.userSubject.next(JSON.parse(storedUser));
    }
  }

  login(credentials: { user: UserDto }) {
    return this.http.post<TokenDto>(`${this.FINAL_API}`, credentials)
      .pipe(
        tap(res => {
          this.token = res.token;
          if (res.userDto) {
            this.userSubject.next(res.userDto);
            this.localStorageService.setItem('idUser', JSON.stringify(res.userDto.idUser));
          }
        })
      );
  }

  logout() {
    this.localStorageService.clear();
    this.userSubject.next(null);
  }

  isLoggedIn(): boolean {
    return this.userSubject.value !== null;
  }

  get token(): string | null {
    return this.localStorageService.getItem('token');
  }

  set token(value: string | null) {
    if (value) {
      this.localStorageService.setItem('token', value);
    } else {
      this.localStorageService.removeItem('token');
    }
  }

  getUserRole(): string | null {
    return this.userSubject.value?.role || null;
  }

}