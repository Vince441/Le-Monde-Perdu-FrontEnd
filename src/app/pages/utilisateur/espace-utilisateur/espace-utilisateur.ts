import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-espace-utilisateur',
  imports: [RouterLink],
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
