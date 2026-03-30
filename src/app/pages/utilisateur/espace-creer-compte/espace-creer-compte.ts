import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/auth.service';
import { UserDto } from '../../../models/utilisateur.model';


@Component({
  selector: 'app-espace-creer-compte',
  imports: [ReactiveFormsModule],
  templateUrl: './espace-creer-compte.html',
  styleUrl: './espace-creer-compte.scss',
})
export class EspaceCreerCompte implements OnInit {

  form!: FormGroup
  userDto: UserDto | null = null;
  idUser: string | null = null;
  private readonly userSubject = new BehaviorSubject<UserDto | null>(null);
  user$ = this.userSubject.asObservable();



  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
    private readonly fb: FormBuilder,
    private readonly router: Router,

  ) {

    this.form = this.fb.group({
      pseudo: ['', Validators.required],
      genre: ['', Validators.required]
    })
  }



ngOnInit() {
  this.authService.user$.subscribe(user => {
    if (user) {
      this.idUser = user.idUser;
      console.warn("Utilisateur connecté :", user);



    } else {
      console.warn("Aucun utilisateur connecté");
      this.idUser = null;
    }
  });
}


  setGenre(value: string) {
    this.form.get('genre')?.setValue(value);
  }


  modifierUtilisateur() {
    console.warn('idUs',this.idUser);

    if (!this.idUser) {
      console.error('Impossible de modifier : id utilisateur manquant');
      return;
    }

    const update: Partial<UserDto> = {
      pseudo: this.form.get('pseudo')?.value,
      genre: this.form.get('genre')?.value
    };

    this.userService.patchUserCreer(this.idUser, update).subscribe({
      next: (updatedUser) => {
        console.log('Utilisateur modifié avec succès :', updatedUser);
        this.userSubject.next(updatedUser);
        this.router.navigate(['espace-utilisateur'])
      },
      error: (err) => {
        console.error('Erreur lors de la modification de l\'utilisateur :', err);
         console.error('Erreur complète :', err);
  console.error('Status :', err.status);
  console.error('Message :', err.message);
      }
    });
  }
}
