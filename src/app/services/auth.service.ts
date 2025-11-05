import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

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

  }

  login(credentials: { email: string; password: string }) {
    return this.http.post<{ token: string, email: string }>(
      `${this.FINAL_API}`, credentials
    ).pipe(
      tap(res => {
        localStorage.setItem('token', res.token);
        this.userSubject.next({ email: res.email });
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
