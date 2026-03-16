import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { UserDto } from '../../models/utilisateur.model';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-accueil',
  imports: [ReactiveFormsModule],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
})
export class Accueil {

  form!: FormGroup
  userDto!: UserDto;
  isActive: boolean = false;
  private readonly userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();
  pseudo!: string;
  userEmail: string | undefined;
  userId: string | undefined;

  constructor(
    private readonly userService: UserService,
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly authService: AuthService,

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
        next: () => {
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


          const user = res.userDto;

          const pseudo = res.userDto.pseudo;

          if (user) {
            this.userEmail = user.email;
            this.userId = user.idUser;
            console.log("Utilisateur connecté :", this.userEmail, this.userId);

            if (pseudo) {
              this.pageEspaceUtilisateur()
            } else {
              this.pageCreationPseudo()
            }
          } else {
            console.warn("⚠️ Aucun user retourné dans la réponse", res);
          }

        },

        error: (err) => console.error('Erreur login', err)
      })
    }
  }

  pageEspaceUtilisateur() {
    this.router.navigate(['/espace-utilisateur'])
  }

  pageCreationPseudo() {
    this.router.navigate(['/creer-mon-compte'])

  }

  itIsActive() {
    this.isActive = !this.isActive
  }
}
