import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
private userSubject = new BehaviorSubject<any>(null);
user$ = this.userSubject.asObservable();

login(user : any){
  this.userSubject.next(user)
}

logout(){
  this.userSubject.next(null);
}


isLoggedIn(): boolean {
  return this.userSubject.value !== null;
}

getUser(){
  return this.userSubject.value;
}


}
