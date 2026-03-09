import { Component, OnInit } from '@angular/core';
import { Dinosaures } from '../../../models/Dinosaures/dinosaures.model';
import { DinoService } from '../../../services/dino.service';
import { AuthService } from '../../../services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mes-dinosaures',
  imports: [RouterLink],
  templateUrl: './mes-dinosaures.html',
  styleUrl: './mes-dinosaures.scss',
})
export class MesDinosaures implements OnInit {
  dino: Dinosaures[] = [];
  errorMessage?: string;

  constructor(private readonly dinosauresService: DinoService, private readonly authService: AuthService) { }

ngOnInit(): void {

  const userId = this.authService.idUser;

  if (!userId) {
    this.errorMessage = "Utilisateur non connecté";
    return;
  }
console.warn("userId envoyé :", userId);
  this.dinosauresService.getUserDinos(userId).subscribe(r => {
  console.warn("relations :", r);

    r.forEach(rel => {
      this.getDinoById(rel.idDinosaures);
    });

  });

}

getDinoById(id: string): void {

  console.warn("appel API dinosaure :", id);

  this.dinosauresService.getDino(id).subscribe({
    next: (dino) => {
      console.warn("DINO RECU :", dino);
      this.dino.push(dino);
    },
    error: (err) => {
      console.error("Erreur API :", err);
    }
  });
}
}
