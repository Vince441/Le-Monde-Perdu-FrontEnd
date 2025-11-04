import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-espace-utilisateur',
  imports: [],
  templateUrl: './espace-utilisateur.html',
  styleUrl: './espace-utilisateur.scss',
})
export class EspaceUtilisateur implements OnInit {

  constructor(
    private readonly authService: AuthService
  ) {

  }

  ngOnInit() {
    this.authService.user$.subscribe(user => {
      console.warn("User connecté :", user);

    })
  }

}
