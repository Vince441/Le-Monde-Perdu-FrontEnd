import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/utilisateur.model';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-accueil',
  imports: [ReactiveFormsModule
  ],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
})
export class Accueil {

  form!: FormGroup
  user!: User;
  isActive: boolean = false;
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor(
    private readonly userService: UserService,
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly authService: AuthService

  ) {

    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }



  enregistrerUser() {
    if (this.form.valid) {

      const user = this.form.value;

      this.userService.postUser(user).subscribe({
        next: (response) => {
          console.warn("Utilisateur enregistré ✅", response);
          this.isActive = true;
        },
        error: (err) => {
          console.error("Erreur", err);
        }
      });

    } else {
      console.warn("Formulaire invalide");
    }
  }


  connexion() {
    if (this.form.valid) {

      const credentials = this.form.value;

      this.authService.login(credentials).subscribe({
        next: (res) => {
          localStorage.setItem('token', res.token);
          this.userSubject.next({ email: res.email });
          this.router.navigate(['/espace-utilisateur']);
        },
        error: (err) => console.error('Erreur login', err)
      })
    }
  }

  itIsActive() {
    this.isActive = !this.isActive
  }
}
