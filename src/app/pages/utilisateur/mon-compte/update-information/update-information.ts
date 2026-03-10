import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserDto } from '../../../../models/utilisateur.model';
import { UserService } from '../../../../services/user.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-information',
  imports: [ReactiveFormsModule],
  templateUrl: './update-information.html',
  styleUrl: './update-information.scss',
})
export class UpdateInformation implements OnInit {
  @Input() user!: UserDto;
  form!: FormGroup
  idUser: string | null = null;
  isUpdateInformation: boolean = false;
  private readonly userSubject = new BehaviorSubject<UserDto | null>(null);
  user$ = this.userSubject.asObservable();

  constructor(private readonly fb: FormBuilder, private readonly userService: UserService, private readonly router: Router) { }

  ngOnInit() {

    this.idUser = localStorage.getItem('idUser');


    this.form = this.fb.group({
      genre: [this.user.genre],
      pseudo: [this.user.pseudo],
      email: [this.user.email]
    });
  }

  setGenre(value: string) {
    this.form.get('genre')?.setValue(value);
    console.warn("genre", value);

  }

  modifierUtilisateur() {

    if (!this.idUser) {
      console.error('Impossible de modifier : id utilisateur manquant');
      return;
    }

    const update: Partial<UserDto> = {
      pseudo: this.form.get('pseudo')?.value,
      genre: this.form.get('genre')?.value,
      email: this.form.get('email')?.value
    };

    this.userService.patchUser(this.idUser, update).subscribe({
      next: (updatedUser) => {
        console.log('Utilisateur modifié avec succès :', updatedUser);
        this.userSubject.next(updatedUser);
        this.router.navigate(['espace-utilisateur'])
      },
      error: (err) => {
        console.error('Erreur lors de la modification de l\'utilisateur :', err);
      }
    });
  }


}
