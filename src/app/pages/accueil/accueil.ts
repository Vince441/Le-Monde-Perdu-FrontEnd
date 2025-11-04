import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/utilisateur.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  imports: [ ReactiveFormsModule
],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
})
export class Accueil {

form! : FormGroup
user!: User;
isHover = false;
showLeftDiv = false;
showRightDiv = false;

constructor(
private readonly userService : UserService,
private readonly fb : FormBuilder,
private readonly router : Router

){

  this.form = this.fb.group({
pseudo:['', Validators.required],
password:['', Validators.required]
  });

}



enregistrerUser() {
  if (this.form.valid) {

    const user = this.form.value;

    this.userService.postUser(user).subscribe({
      next: (response) => {
        console.log("Utilisateur enregistré ✅", response);
        this.router.navigate(['/espace-utilisateur'])
      },
      error: (err) => {
        console.error("Erreur", err);
      }
    });

  } else {
    console.warn("Formulaire invalide");
  }
}
}
