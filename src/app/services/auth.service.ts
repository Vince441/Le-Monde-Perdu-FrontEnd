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

  private readonly userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor(private readonly http: HttpClient, private readonly localStorageService: LocalStorageService) {

    const storedIdUser = localStorage.getItem('idUser');
    this.userSubject = new BehaviorSubject<string | null>(
      storedIdUser ? storedIdUser : null
    );
    this.user$ = this.userSubject.asObservable();    
  }

  get idUser(): string | null {
    return this.userSubject.value;
  }

  set idUser(value: string | null) {
    if (value) {
      this.localStorageService.setItem('idUser', value);
    } else {
      this.localStorageService.removeItem('idUser');
    }
    this.userSubject.next(value);
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


  login(credentials: { user: UserDto }) {
    return this.http.post<TokenDto>(`${this.FINAL_API}`, credentials)
      .pipe(
        tap(res => {
          this.token = res.token
          if (res.userDto?.idUser) {
            // this.setUserId(res.userDto.idUser)

            this.idUser = res.userDto.idUser;
            this.userSubject.next(res.userDto.idUser);
          }
        })
      );
  }


  logout() {
    this.localStorageService.clear;
    this.userSubject.next(null);
  }


  isLoggedIn(): boolean {
    return this.userSubject.value !== null;
  }

    getUserRole() {
    return this.userSubject.value?.role || null;
  }


}
