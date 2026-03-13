import { Component, OnInit } from '@angular/core';
import { Dinosaures } from '../../../models/Dinosaures/dinosaures.model';
import { DinoService } from '../../../services/dino.service';
import { AuthService } from '../../../services/auth.service';
import { RouterLink } from '@angular/router';
import { UtilisateurDinosaureService } from '../../../services/UtilisateurDinosaure.service';
import { DinoStatService } from '../../../services/dino-stat.service';
import { DinoStat } from '../../../models/Dinosaures/dinoStat.model';
import { catchError, forkJoin, of } from 'rxjs';

@Component({
  selector: 'app-mes-dinosaures',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './mes-dinosaures.html',
  styleUrl: './mes-dinosaures.scss',
})
export class MesDinosaures implements OnInit {
  dino: Dinosaures[] = [];
  errorMessage?: string;
  dinoStat : DinoStat | null = null;

  constructor(private readonly utilisateurDinosaureService: UtilisateurDinosaureService,
    private readonly dinosauresService : DinoService, private readonly dinoStatService : DinoStatService,
    private readonly authService: AuthService) { }

ngOnInit(): void {

  const userId = this.authService.idUser;

  if (!userId) {
    this.errorMessage = "Utilisateur non connecté";
    return;
  }
console.warn("userId envoyé :", userId);
  this.utilisateurDinosaureService.getUserDinos(userId).subscribe(r => {
  console.warn("relations :", r);

    r.forEach(rel => {
      this.getDinoById(rel.idDinosaures);
    });

  });

}

getDinoById(id: string): void {
  console.warn("appel API dinosaure :", id);

  forkJoin({
    dino: this.dinosauresService.getDino(id),
    stats: this.dinoStatService.getStatByIdDino(id).pipe(
      catchError((err) => {
        console.warn(`Stats manquantes pour ${id}, on continue avec null`, err);
        return of(null); // On continue la quête même si les stats sont absentes
      })
    )
  }).subscribe({
    next: ({ dino, stats }) => {
      console.warn("DINO RECU :", dino);
      console.warn("STATS RECUES :", stats);

      this.dino.push(dino);
      this.dinoStat = stats;
    },
    error: (err) => {
      console.error("Erreur API inattendue :", err);
    }
  });
}
}
